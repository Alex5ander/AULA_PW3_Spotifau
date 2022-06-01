import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotifau';

  planos = [
    {
      title: 'Individual',
      preco: 'R$ 16,90/mês após o período da oferta',
      account: '1 conta',
      list: [
        "Curta música em anúncios",
        "Ouça em qualquer lugar",
        "Toque o que quiser",
        "Pague adiantado ou faça uma assinatura"
      ]
    },
    {
      title: 'Duo',
      preco: 'R$ 21,90/mês após o período da oferta',
      account: '2 contas',
      list: [
        "2 contas Premium para um casal que mora junto",
        "Duo Mix: uma playlist só pra vocês, atualizada regularmente com músicas que os dois gostam",
        "Ouça sem anúncio, no modo offline e sob demanda"
      ]
    },
    {
      title: 'Família',
      preco: 'R$ 26,90/mês após o período da oferta',
      account: '6 contas',
      list: [
       "6 contas Premium para familiares que moram no mesmo endereço",
       "Family Mix: uma playlist pra família, atualizada regularmente com músicas que todo mundo gosta",
       "Bloqueie música explícita",
       "Ouça sem anúncio, no modo offline e sob demanda",
       "Pague adiantado ou faça uma assinatura"
      ]
    },
    {
      title: 'Universitário',
      preco: 'R$ 8,50/mês após o período da oferta',
      account: '1 conta',
      list: [
       "Desconto especial para estudantes universitários que tenham direito à oferta",
       "Curta música sem anúncios",
       "Ouça em qualquer lugar até offline",
       "Toque o que quiser"
      ]
    }
  ];
}
