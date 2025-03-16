import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import StepOne from "@/app/components/MultiStepForm/StepOne";
import StepTwo from "@/app/components/MultiStepForm/StepTwo";
import StepThree from "@/app/components/MultiStepForm/StepThree";
import StepFour from "@/app/components/MultiStepForm/StepFour";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { createPortfolio, createProject, createSkills } from "@/app/utils/api.service";
import { Template, templates } from "@/app/interface/Template";
import { Project } from "@/app/interface/project";
import { Skill } from "@/app/interface/skill";
import { useRouter } from "expo-router";
import { usePortfolio } from "@/app/context/PortfolioContext";

const MultiStepForm = () => {
  const { fetchPortfolioData } = usePortfolio();
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [username, setUsername] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [presentation, setPresentation] = useState("");

  const [skillName, setSkillName] = useState("");
  const [skillImage, setSkillImage] = useState<string | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLinkName, setProjectLinkName] = useState("");
  const [projectLinkUrl, setProjectLinkUrl] = useState("");
  const [projectImage, setProjectImage] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [selectedColors, setSelectedColors] = useState<Template["color"] | null>(null);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

const handleSubmit = async () => {
  const defaultTemplate = templates[0];
  const portfolioPayload = {
    title: userTitle,
    subtitle,
    bio: presentation,
    url: `exemple-${Date.now()}`,
    config: {
      colors: selectedColors || defaultTemplate.color,
      font: "",
    },
    template: selectedTemplate?.id || defaultTemplate.id,
  };

  try {
    await createPortfolio(portfolioPayload);

    const allSkills = [...skills];
    if (skillName.trim()) {
      allSkills.push({
        id: Date.now().toString(), 
        name: skillName,
        image: skillImage,
      });
    }
    for (const s of allSkills) {
      await createSkills({ name: s.name }, s.image);
    }

    const allProjects = [...projects];
    if (projectTitle.trim()) {
      allProjects.push({
        id: Date.now().toString(),
        title: projectTitle,
        description: projectDescription,
        image: projectImage,
        linkName: projectLinkName,
        linkUrl: projectLinkUrl,
      });
    }
    for (const p of allProjects) {
      const links = p.linkName && p.linkUrl ? [{ name: p.linkName, url: p.linkUrl }] : [];
      await createProject(
        { title: p.title, description: p.description, links },
        p.image
      );
    }

    console.log("Tout envoyé avec succès.");
    await fetchPortfolioData();
    router.push("(tabs)/Dashboard");
  } catch (error) {
    console.error("Erreur lors de l'envoi final :", error);
  }
};

  const steps = [
    {
      id: 1,
      component: (
        <StepOne
          username={username}
          setUsername={setUsername}
          userTitle={userTitle}
          setUserTitle={setUserTitle}
          subtitle={subtitle}
          setSubtitle={setSubtitle}
          presentation={presentation}
          setPresentation={setPresentation}
        />
      ),
    },
    {
      id: 2,
      component: (
        <StepTwo 
          skillName={skillName}
          setSkillName={setSkillName}
          skillImage={skillImage}
          setSkillImage={setSkillImage}
          skills={skills}
          setSkills={setSkills}
        />
      ),
    },
    {
      id: 3,
      component: (
        <StepThree 
          title={projectTitle} 
          setTitle={setProjectTitle}
          description={projectDescription}
          setDescription={setProjectDescription}
          linkName={projectLinkName}
          setLinkName={setProjectLinkName}
          linkUrl={projectLinkUrl}
          setLinkUrl={setProjectLinkUrl}
          projectImage={projectImage}
          setProjectImage={setProjectImage}
          projects={projects}
          setProjects={setProjects}
        />
      ),
    },
    {
      id: 4,
      component: (
        <StepFour
          onTemplateSelect={setSelectedTemplate}
          onColorSelect={setSelectedColors}
        />
      ),
    },
  ];

  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.containerPage}>
        <HeaderTitle
          title="Configuration de votre projet"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={styles.containerProgress}>
          <View style={[styles.number, step >= 1 ? styles.active : styles.inactive]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.trait, step >= 2 ? styles.activeTrait : styles.inactiveTrait]} />
          <View style={[styles.number, step >= 2 ? styles.active : styles.inactive]}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.trait, step >= 3 ? styles.activeTrait : styles.inactiveTrait]} />
          <View style={[styles.number, step >= 3 ? styles.active : styles.inactive]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.trait, step >= 4 ? styles.activeTrait : styles.inactiveTrait]} />
          <View style={[styles.number, step >= 4 ? styles.active : styles.inactive]}>
            <Text style={styles.text}>4</Text>
          </View>
        </View>
        {steps.find((s) => s.id === step)?.component}
        <View style={styles.buttonContainer}>
          {step > 1 && (
            <ButtonFull
              text="Précédent"
              onPress={prevStep}
              style={globalStyles.buttonPrev}
            />
          )}
          {step === 4 ? (
            <ButtonFull
              text="Envoyer"
              onPress={handleSubmit}
              style={globalStyles.buttonNext}
            />
          ) : (
            step < steps.length && (
              <ButtonFull
                text="Suivant"
                onPress={nextStep}
                style={globalStyles.buttonNext}
              />
            )
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  containerProgress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  number: {
    height: 25,
    width: 25,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  active: {
    color: "#ffffff",
    backgroundColor: "#3E3F92",
    borderRadius: 100,
  },
  inactive: {
    color: "#6B7280",
    backgroundColor: "#6B7280",
    borderRadius: 100,
  },
  text: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 14,
  },
  trait: {
    flex: 1,
    height: 2,
    backgroundColor: "#ffffff",
    alignSelf: "center",
  },
  activeTrait: {
    backgroundColor: "#3E3F92",
  },
  inactiveTrait: {
    backgroundColor: "#6B7280",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    marginBottom: 50,
  },
});

export default MultiStepForm;