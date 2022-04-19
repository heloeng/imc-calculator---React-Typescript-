//css módules
import { useState } from 'react';
import styles from '../../App.module.css'


//importa para conseguir usar a imagem
import poweredImage from '../../assests/powered.png';
export const Home = () => {

    //"<number>" tipar
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () =>{
        if(heightField && weightField){


        }else {
            alert("Digite todos os campos");
        }
    }

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImage} alt='' width={150} />
                </div>
            </header>

            <div className={styles.container}>

                <div className={styles.leftSide}>
                    <h1>Calcule seu IMC.</h1>
                    <p>IMC é a siga para índice de Massa Corpórea, parâmetro adotado pela Organição Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

                    <input
                        type="number"
                        placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
                        value={heightField > 0 ? heightField : ''}

                        //    value será sempre uma string, mesmo digitando um número,
                        //     /entao deve transformar o valor digitado em número
                        //     função que altera o estado: setHeighField
                        //     a função vai receber um evento. Esse evento é quando altera o input
                        //     ele vai enviar pra gente esse evento . Esse evento está relacionado com o próprio input.
                        //     vai chamar o setHeighField que é o método que criou la em cima, esse estado.
                        //     e passa o "event.target.value" = 
                        //     "event"  o event esta relaciona com o proprio campo que ele mudou: "value={name}" então,
                        //     irá pegar o próprio campo: "value={name}"
                        //     entao o event, pega o 'target' que é o elemento,  que é o input
                        //     e o value desse input, e setando dentro  do "heighField"
                        onChange={e => setHeightField(parseFloat(e.target.value))}
                    />



                    <input
                        type="number"
                        placeholder="Digiteo o seu peso. Ex: 75.3 (em kg)"
                        value={weightField > 0 ? weightField : ''}
                        onChange={e => setWeightField(parseFloat(e.target.value))}
                    />



<button onClick={handleCalculateButton}>Calcular</button>


                </div>

                <div className={styles.rightSide}>
                 
                </div>
            </div>




        </div>

    );

}

