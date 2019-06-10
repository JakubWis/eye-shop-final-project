import React from 'react';

import './Regulations.scss';

let dumyContent = []
dumyContent.push(
  <p key={'pierwszy paragraf'}>
    Zawarcie Umowy Sprzedaży między Klientem a Sprzedawcą następuje po uprzednim złożeniu przez Klienta Zamówienia za pomocą Formularza zamówienia w Sklepie internetowym zgodnie z § 7 Regulaminu.Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego otrzymanie oraz jednocześnie przyjmuje Zamówienie do realizacji. Potwierdzenie otrzymania Zamówienia i jego przyjęcie do realizacji następuje poprzez przesłanie przez Sprzedawcę Klientowi stosownej wiadomości e-mail na podany w trakcie składania Zamówienia adres poczty elektronicznej Klienta, która zawiera co najmniej oświadczenia Sprzedawcy o otrzymaniu Zamówienia i o jego przyjęciu do realizacji oraz potwierdzenie zawarcia Umowy Sprzedaży. Z chwilą otrzymania przez Klienta powyższej wiadomości e-mail zostaje zawarta Umowa Sprzedaży między Klientem a Sprzedawcą.W przypadku wyboru przez Klienta: płatności przelewem, płatności elektronicznych albo płatności kartą płatniczą, Klient obowiązany jest do dokonania płatności w terminie 2 dni kalendarzowych od dnia zawarcia Umowy Sprzedaży - w przeciwnym razie zamówienie zostanie anulowane.płatności za pobraniem przy odbiorze przesyłki, Klient obowiązany jest do dokonania płatności przy odbiorze przesyłki..płatności gotówką przy odbiorze osobistym przesyłki, Klient obowiązany jest dokonać płatności przy odbiorze przesyłki w terminie 2 dni od dnia otrzymania informacji o gotowości przesyłki do odbioru.
  </p>)
for( let i = 0; i < 3; i++) {
  dumyContent.push(<p key={i}>
    Nunc consequat lacus vel facilisis lobortis. Aenean facilisis nisl ut erat tincidunt, at pharetra dolor malesuada. Aenean maximus varius orci et accumsan. In facilisis ipsum ut volutpat blandit. Duis metus magna, dictum sit amet porta non, imperdiet nec velit. Praesent ultrices aliquam leo quis eleifend. Nam tincidunt blandit elit non egestas. Aenean tincidunt elit non orci vestibulum feugiat. Mauris non tortor fermentum, condimentum mauris at, porttitor neque.
    </p>)
}

const Regulamin = props => {
    return(
      <div className="Regulamin">
        <h1>Regulamin</h1>
        {dumyContent}
      </div>
    );
  }

export default Regulamin;