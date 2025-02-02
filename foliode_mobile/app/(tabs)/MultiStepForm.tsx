import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Button, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Card } from "@/components/ui/Card";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import StepOne from "@/components/MultiStepForm/StepOne";
import StepTwo from "@/components/MultiStepForm/StepTwo";
import StepThree from "@/components/MultiStepForm/StepThree";
import StepFour from "@/components/MultiStepForm/StepFour";
// import ProgressBar from "@/components/MultiStepForm/ProgressBar";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, component: <StepOne /> },
    { id: 2, component: <StepTwo /> },
    { id: 3, component: <StepThree /> },
    { id: 4, component: <StepFour /> },
  ];

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.container}>
        <HeaderTitle
          title="Cnfiguration de votre projet"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={styles.containerProgress}>
          <View
            style={[styles.number, step >= 1 ? styles.active : styles.inactive]}
          >
            <Text style={styles.text}>1</Text>
          </View>

          <View style={[styles.trait,step >= 2 ? styles.activeTrait : styles.inactiveTrait,]}>

              <View></View>
          </View>

          <View
            style={[styles.number, step >= 2 ? styles.active : styles.inactive]}
          >
            <Text style={styles.text}>2</Text>
          </View>
          <View
            style={[
              styles.trait,
              step >= 3 ? styles.activeTrait : styles.inactiveTrait,
            ]}
          />
          <View
            style={[styles.number, step >= 3 ? styles.active : styles.inactive]}
          >
            <Text style={styles.text}>3</Text>
          </View>
          <View
            style={[
              styles.trait,
              step >= 4 ? styles.activeTrait : styles.inactiveTrait,
            ]}
          />
          <View
            style={[styles.number, step >= 4 ? styles.active : styles.inactive]}
          >
            <Text style={styles.text}>4</Text>
          </View>
        </View>
        {steps.find((s) => s.id === step)?.component}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          {step > 1 && <Button title="Précédent" onPress={prevStep} />}
          {step < steps.length && <Button title="Suivant" onPress={nextStep} />}
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
    // marginHorizontal: 5,
  },
  activeTrait: {
    backgroundColor: "#3E3F92",
  },
  inactiveTrait: {
    backgroundColor: "#6B7280",
  },
});

export default MultiStepForm;
