import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

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
      <Text>
        Question: {questionNr} / {totalQuestions}
      </Text>
      <Text>{question}</Text>
      <View>
        {answers.map((answer) => (
          <View key={answer}>
            <Button title={answer} disabled={userAnswer} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuestionCard;
