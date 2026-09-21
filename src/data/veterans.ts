export type VeteranStep = {
  id: string;
  title: string;
  text: string;
};

export type VeteranPartner = {
  name: string;
  logoSrc: string | null;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  placeholder: string;
};

export type VeteranProgram = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  stepsHeading: string;
  steps: VeteranStep[];
  documentsHeading: string;
  documents: string[];
  partnerHeading: string;
  partner: VeteranPartner;
  note: string;
};

export const veteranProgram: VeteranProgram = {
  title: 'Турбота про ветеранів',
  description:
    'Точні умови програми, перелік послуг і вимоги до підтвердження статусу будуть опубліковані після отримання офіційного документа замовника.',
  ctaLabel: 'Записатися',
  ctaHref: '#zapis',
  stepsHeading: 'Як отримати послугу',
  steps: [
    {
      id: 'request',
      title: 'Запис на прийом',
      text: 'Залиште заявку через форму або зателефонуйте. Формулювання кроку — з офіційного документа.',
    },
    {
      id: 'status',
      title: 'Підтвердження статусу',
      text: 'Надайте документи зі списку нижче. Остаточний перелік затверджує замовник.',
    },
    {
      id: 'consult',
      title: 'Консультація',
      text: 'Огляд і визначення подальших кроків за показаннями лікаря. Обсяг допомоги — за умовами програми.',
    },
  ],
  documentsHeading: 'Документи для підтвердження статусу',
  documents: [
    '[Документ, що підтверджує статус — формулювання з офіційного переліку]',
    '[Документ, що посвідчує особу]',
    '[Додаткові документи — за переліком програми]',
  ],
  partnerHeading: 'Фонд-партнер',
  partner: {
    name: '',
    logoSrc: null,
    logoAlt: '',
    logoWidth: 160,
    logoHeight: 64,
    placeholder: 'Місце для назви та логотипа фонду-партнера',
  },
  note: '* Остаточні умови програми публікуються після офіційного документа замовника. Консультація лікаря обовʼязкова.',
};
