import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <View>
      <Text>Question Card</Text>
    </View>
  );
};

export default QuestionCard;
