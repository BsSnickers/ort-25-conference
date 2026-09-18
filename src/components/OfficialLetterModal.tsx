import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { X, Printer, Download } from 'lucide-react';
import { printOrDownloadOfficialLetter } from '../utils/generateLetterPdf';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficialLetterModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-zinc-300 overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="bg-[#151A2C] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block">
              {t.header.anniversaryBadge}
            </span>
            <h3 className="text-base sm:text-lg font-bold tracking-tight">
              {language === 'ky' ? 'Расмий маалыматтык кат' : language === 'en' ? 'Official Information Letter' : 'Официальное информационное письмо'}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => printOrDownloadOfficialLetter(language)}
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-white text-[#151A2C] hover:bg-zinc-200 transition cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'ky' ? 'Басып чыгаруу' : language === 'en' ? 'Print' : 'Печать'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#F8FAFC] text-[#151A2C] font-sans">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 border border-zinc-200">
            {/* Header */}
            <div className="text-center pb-6 border-b-2 border-[#151A2C] mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-800 mb-1">
                {t.header.orgName}
              </div>
              <div className="text-[11px] text-zinc-500 mb-3">
                {t.hero.organizers}
              </div>
              <div className="inline-block px-3 py-1 bg-[#151A2C] text-white text-xs font-bold uppercase tracking-wider mb-2">
                {language === 'ky' ? 'МААЛЫМАТТЫК КАТ' : language === 'en' ? 'INFORMATION LETTER' : 'ИНФОРМАЦИОННОЕ ПИСЬМО'}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#151A2C] uppercase tracking-tight mt-2">
                {t.hero.title}
              </h1>
              <div className="text-sm font-semibold text-[#151A2C]/80 mt-1">
                {t.hero.titleAccent}
              </div>
            </div>

            {/* Meta Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border border-zinc-200 p-3 bg-zinc-50 mb-6 font-mono">
              <div><strong>Дата:</strong> {t.hero.dateMeta}</div>
              <div><strong>Локация:</strong> {t.hero.locationMeta}</div>
            </div>

            {/* Sections */}
            <div className="text-xs sm:text-sm space-y-4 text-zinc-800 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#151A2C] uppercase tracking-wider text-xs border-b border-zinc-200 pb-1 mb-2">
                  Цель конференции
                </h4>
                <p>{t.concept.col1}</p>
                <p className="mt-2">{t.concept.col2}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#151A2C] uppercase tracking-wider text-xs border-b border-zinc-200 pb-1 mb-2">
                  Об организации
                </h4>
                <p>{t.institute.lead}</p>
                <p className="mt-2">{t.institute.body1}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#151A2C] uppercase tracking-wider text-xs border-b border-zinc-200 pb-1 mb-2">
                  Основные направления
                </h4>
                <ol className="list-decimal pl-5 space-y-1.5">
                  {t.tracks.items.map((item) => (
                    <li key={item.id}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-zinc-300 text-xs text-zinc-600">
                <p><strong>{t.footer.brandDesc}</strong></p>
                <p>Адрес: {t.footer.address}</p>
                <p>Телефоны: {t.footer.phones.join(', ')}</p>
                <p>Email: {t.footer.email}</p>
              </div>

              <div className="pt-6 flex justify-between items-end">
                <div className="text-xs">
                  <strong>Оргкомитет конференции</strong><br />
                  {t.header.orgName}
                </div>
                <div className="w-24 h-24 rounded-full border-2 border-[#151A2C] p-1 flex flex-col items-center justify-center text-center text-[8px] font-bold text-[#151A2C] uppercase transform -rotate-4">
                  <span>{t.header.orgName}</span>
                  <span className="text-[10px] my-0.5">★ 25 ★</span>
                  <span>БИШКЕК 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-zinc-100 px-6 py-3 border-t border-zinc-200 flex justify-end gap-3">
          <button
            onClick={() => printOrDownloadOfficialLetter(language)}
            className="px-4 py-2 bg-[#151A2C] hover:bg-[#0D111E] text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{language === 'ky' ? 'PDF жүктөп алуу' : language === 'en' ? 'Download PDF' : 'Скачать PDF'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
          >
            {language === 'ky' ? 'Жабуу' : language === 'en' ? 'Close' : 'Закрыть'}
          </button>
        </div>
      </div>
    </div>
  );
};
