//alert("hello");
const btnStart = document.getElementById('btn_start');
const picBlock = document.getElementById('pic_block');
const pic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAeFBMVEX///8REREAAAC9vb3Nzc21tbUJCQnm5uZKSkpPT08tLS2UlJSkpKSQkJDw8PD39/ednZ1xcXGvr69ERETa2trz8/NdXV3Hx8fU1NRpaWmqqqp5eXlkZGTq6uo6Ojrg4OCHh4cnJyc0NDSBgYEpKSlXV1ccHBwgICANJpVZAAAE+ElEQVR4nO2c63aqMBBGIUi0VZRq1Xq37Wn7/m94pGImJAQSi3V1zbd/hgwhWyQ3SBQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADo95JpnufrdHmYtOeeLHtnlh6Zo+iSu7czDrz0gtk5znDwrOgZdbp+UFgdk+R9L3TkatRyMX2V16t4lXtqHJiJYNLqGdSVZwE1jqL4EpYHhdlMB4WwWEeeUuKsSUxflFk99V1yG3WPHkQciEiqZxiUZxDDoFo/ljUWo6Awg917YaqOk8LB0hkHfSfmG4e78tRi33NEQl8UjRrlFUixrW8aoG+897l0YV7uGfb6luatJy9tkXm9m5po7vryynUX6r6278M8zzYPpkIxs8M713d1x+Uu+o66oJOtY097xu3SVaUrI16tB2DX+sRxMvbEuJZ76NPtCbGoaV9HUs/yZR7uXF9Yp1fjDvpGuprZsysT5RJ74yBnfT3yIsXamW2iPdfFqnqMsb65ZiVurP1Qy1nVzFjfQEkRby1ZU81fZaaDr74p2XtszUz+qt0XvvqUECk85uro/1upOlt91GcRjia3yuKSXwotlas+ajc8y5tQgFYSV33q5pOvnhFp3e3HVR/dS66pPIu9tCvPVJ9qduvmARwsa2KY6pupirgn4i3+ScsVT31j9RyLA6LWqvZqWYqnvhoRHqjGV6qZA576FmG1tsPmZQpPfcG9ljPU4FxmylnqO6hqHIPKIlmZlcJIX2rdRZ6ouIcygfSZb600x/9pfdl1jz794VcmkL7U57Wedn1hldf4RX1b04Iv5L2cpFH6/JbIVGanvlWS+mAPlX5R31sZI9sn+qpQ21G+eUX6gvjxQuXKurRf1KeudRFUlD5uKwcrnevzjH+yLu0e+upeHGji2Xx4cdSnRg+B/Ra9pVgbCYz0qRFvcDtHkWVpHPXtrhrxFszNSOgLoUFfNx2Xv6DvFn9ecZi0090bVvfsuNyi6ehqzPsXRh036LhwmjLooNtcjppY6lODtrZ3W0zcgzZO+m4wZcBJH1nwmqUjGiasGOn7+XTpR5nAUh8m6xU/WyoKazuo5bgsrvPUt7ju4bcwWw6m+miZPCSKRivqJRee+tSkQdB0/dSWzlOf9orQS3hRsRhfkpjqoxvJf9xGy4wPKo2pPu31SK83mwvUh6tab5GrvqPdDLSQqOelpESu+sZ0+5lVcaC+rdQ/LOKqL3onf+P23No0g37z8dWnfWjg03mhjy8r42S2+qjrTBMAbhLKPNDT+eqjvl9770XNMpvDPMb6xpqT5uZX+2za2D6JsT7tHxmLptHHVsuHz6EJ7TNnKTaO7yrTX/0Y/y8sVCo2ZOZ0A2Y1PZjkUdtLQ3yah++4EYmoLtQMAs6ghdE4PrC8b540f8VeGmnFYO9Y3Yjk8+YbkYTg0BcW+Cjb89eWd6aykUvxE8TbbJSm6Xq4KXbEqxx8s//e3PVF05o9+84YJxbbmmj2+qLDp0/Bon6nEugr/sBtRUsxq18Ugb5CwkejQCli13ow9H3zvLWedSpKvLqntO649avRkdi3568L/Ly2PINx/iXs5uLEU9PX+pM0OZN6bTx8yZ2YspdJOOm1Z9ADQwpsqVx/vTV8DzLvnQ5AwfwlWQ+z4zHL0w52ggYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFDyH9DzV73M3bAKAAAAAElFTkSuQmCC";
let hello_block=null;

btnStart.addEventListener('click',onBtnStartClick);

function onBtnStartClick(){
    if(!document.getElementById('hello_block')){
        picBlock.insertAdjacentHTML('afterbegin', `<img id=hello_block src="${pic}" alt='Hello'>`);
        let helloBlock = document.getElementById('hello_block');
        setTimeout(()=>{helloBlock.remove(); helloBlock=null},5_000);
    };
}

