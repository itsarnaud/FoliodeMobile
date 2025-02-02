import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Card } from "@/components/ui/Card";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import StepOne from "@/components/MultiStepForm/StepOne";
import StepTwo from "@/components/MultiStepForm/StepTwo";
import StepThree from "@/components/MultiStepForm/StepThree";
import StepFour from "@/components/MultiStepForm/StepFour";

const MultiStepForm = () => {
  return (
    <>
      <HeaderLogo />
      <StepFour />
    </>
  );
};

const styles = StyleSheet.create({
});

export default MultiStepForm;
