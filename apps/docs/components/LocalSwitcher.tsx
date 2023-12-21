import { useLocale, useTranslations } from 'next-intl';

import { locales } from '@skeleton/shared';
import { LocaleSwitcherSelect } from './LocaleSwitcherSelect';

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      <>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </>
    </LocaleSwitcherSelect>
  );
};
