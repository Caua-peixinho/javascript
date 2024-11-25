function verificar() {          //Função de verificar os dados
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {   //Verificar erro
        window.alert('Verifique os dados e tente novamente!')

    } else {    //Executar os dados
        //Apresentação de dados
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')

         if (fsex[0].checked) { //Dados executados se for homem
            gênero = 'Homem'
            if (idade >=0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade >=13 && idade < 23) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            }
            else if (idade >= 23 && idade < 55) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            }
            else if (idade >= 55) {
                //Idoso
                img.setAttribute('src', 'homemidoso.png')
            }

         } else if (fsex[1].checked) {  //Dados executados se for mulher
            gênero = 'Mulher'
            if (idade >=0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade >=13 && idade < 23) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            }
            else if (idade >= 23 && idade < 55) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            }
            else if (idade >= 55) {
                //Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
         }
         
         //Execução final
         res.style.textAlign = 'center' 
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
         res.appendChild(img)
    } 
}