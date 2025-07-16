import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    /* Основной брендовый цвет — Оранжевый */
    --color-primary: #FF6B00;          /* фирменный оранжевый */
    --color-primary-hover: #e35f00;
    --color-primary-active: #FFA500FF;

    /* Акцент */
    --color-accent: #FF2E63;           /* контрастный акцент */
    --color-accent-hover: #e02555;

    /* Фоновые цвета */
    --color-bg-default: #F4F5F7;
    --color-bg-card: #FFFFFF;
    --color-bg-hover: #F0F0F0;

    /* Цвета текста */
    --color-text-primary: #070707;
    --color-text-secondary: #6A6A6A;
    --color-text-inverse: #FFFFFF;
    --color-link: #FF6B00;
    --color-pozitive: #10c44c;
    --color-sale: #F1117EFF;

    /* Границы и интерфейс */
    --color-border: #DCDCDC;
    --color-divider: #E6E6E6;

    /* Состояния */
    --color-success: #27AE60;
    --color-error: #EB5757;
    --color-warning: #F2994A;
    --color-disabled: #C4C4C4;

    /* Эффекты */
    --color-focus-outline: rgba(255, 107, 0, 0.4); /* оранжевый фокус */
    --color-shadow: rgba(0, 0, 0, 0.1);
}
`;
