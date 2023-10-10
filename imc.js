Code in .js >>>

	// IMC = altura em metros * altura em metros / peso em kg
	// && = E
	// || = OU
	// Classificação do IMC 
	// 18,5 ou menos - Abaixo do normal
	// Entre 18,6 e 24,9 - Normal 
	// Entre 25,0 e 29,9 - Sobrepeso
	// Entre 30,0 e 34,9 - Obesidade grau I
	// Entre 35,0 e 39,9 - Obesidade grau II
	// Acima de 40,0 - Obesidade grau III

	let peso = 75;
	let altura = 1.75;
	let altura2 = altura * altura;
	let IMC = Math.round(peso / altura2);

	if (IMC <= 18.5) {
		mensagem = IMC + " de índice de massa corporal, que é considerado abaixo do normal." 
		+ "\nÉ recomendado rever seus hábitos alimentares e procurar um médico.";
	}
		else if (IMC >= 18.6 && IMC <= 24.9) {
		mensagem = IMC + " de índice de massa corporal considerado normal. continue assim!";
		}
		else if (IMC >= 25 && IMC <= 29.9) {
		mensagem = IMC + " de índice de massa corporal acima do normal."
		+ "\nÉ recomendado rever seus hábitos alimentares e praticar atividades físicas.";
		}
		else if (IMC >= 30 && IMC <= 34.9) {
		mensagem = IMC + (" de índice de massa corporal. Esse valor indica obesidade grau I.")
		+ "\nÉ recomendado procurar um médico.";
		}
		else if (IMC >= 35 && IMC <= 39.9) {
		mensagem = IMC + (" de índice de massa corporal. Esse valor indica obesidade grau II.")
		+ "\nÉ altamente recomendado procurar um médico.";
		}
		else if (IMC > 40) {
		mensagem = IMC + (" de índice de massa corporal. Esse valor indica obesidade grau III.")
		+ "\nProcure um médico imediatamente.";
		}

		
console.log(mensagem);
