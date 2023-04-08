import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {

const [height,setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha seu peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton ] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height).toFixed(2)))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha peso e altura")
}

  return (
    <View>
      <View>
        <Text>Formulario</Text>
        <Text>Peso</Text>
        <TextInput 
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 60" 
        keyboardType="numeric">
          
        </TextInput>
        <Text>Altura</Text>
        <TextInput 
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 1,73" 
        keyboardType="numeric">
         
        </TextInput>
      </View>
      <View>
        <Button 
        onPress={() => validationImc()}
        tittle="Calcular IMC"/>
      </View>
      <View>
        <Text>Resultado</Text>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/> 
      </View>
     
    </View>
  );
}
