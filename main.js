const btnGetData = document.querySelector("#getData");
const list = document.querySelector('.list');


btnGetData.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    //console.log(xhr);

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);

    xhr.send();

    xhr.addEventListener('load', function() {
        if(this.status == 200) {
            const wynik = xhr.response;
            const jsonWynik = JSON.parse(wynik);

            jsonWynik.forEach(function(a) {
                const liElement = document.createElement("li");

                liElement.innerText = a.title;

                list.appendChild(liElement);
            });
        }
        else{
            list.innerText = "Status połączenia: " + this.status;
        }
    })

    xhr.addEventListener('error', function(){
        list.innerText = 'Brak połączenia internetowego.';
    })
});

const inputImie = document.querySelector('#imie')
const inputNazwisko = document.querySelector('#nazwisko')
const ajaxSend = document.querySelector('.btn_ajaxSend');

ajaxSend.addEventListener('click',function(){
    let imie = inputImie.value;
    let nazwisko = inputNazwisko.value;
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'http://172.16.131.125/3ti/ral_m/ajaxSend/dane.php',true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send("imie ='" +imie+ "' & nazwisko='"+ nazwisko +"'");
})