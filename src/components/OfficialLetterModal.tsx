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
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-2xl">
        {/* Modal Header in Pleasant Imperial Blue */}
        <div className="bg-[#1D3557] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8C5EA] block font-bold">
              {t.header.anniversaryBadge}
            </span>
            <h3 className="text-base sm:text-lg font-bold tracking-tight">
              {language === 'ky' ? 'Расмий маалыматтык кат' : language === 'en' ? 'Official Information Letter' : 'Официальное информационное письмо'}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => printOrDownloadOfficialLetter(language)}
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-white text-[#1D3557] hover:bg-slate-200 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'ky' ? 'Басып чыгаруу' : language === 'en' ? 'Print' : 'Печать'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#F8FAFC] text-[#1D3557] font-sans">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 border border-slate-200">
            {/* Header */}
            <div className="text-center pb-6 border-b-2 border-[#1D3557] mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-1">
                {t.header.orgName}
              </div>
              <div className="text-[11px] text-slate-500 mb-3">
                {t.hero.organizers}
              </div>
              <div className="inline-block px-3 py-1 bg-[#1D3557] text-white text-xs font-bold uppercase tracking-wider mb-2">
                {language === 'ky' ? 'МААЛЫМАТТЫК КАТ' : language === 'en' ? 'INFORMATION LETTER' : 'ИНФОРМАЦИОННОЕ ПИСЬМО'}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#1D3557] uppercase tracking-tight mt-2">
                {t.hero.title}
              </h1>
              <div className="text-sm font-semibold text-[#2A4D7A] mt-1">
                {t.hero.titleAccent}
              </div>
            </div>

            {/* Meta Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border border-slate-200 p-3 bg-slate-50 mb-6 font-mono">
              <div><strong>Дата:</strong> {t.hero.dateMeta}</div>
              <div><strong>Локация:</strong> {t.hero.locationMeta}</div>
            </div>

            {/* Sections */}
            <div className="text-xs sm:text-sm space-y-4 text-slate-800 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#1D3557] uppercase tracking-wider text-xs border-b border-slate-200 pb-1 mb-2">
                  Цель конференции
                </h4>
                <p>{t.concept.col1}</p>
                <p className="mt-2">{t.concept.col2}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D3557] uppercase tracking-wider text-xs border-b border-slate-200 pb-1 mb-2">
                  Об организации
                </h4>
                <p>{t.institute.lead}</p>
                <p className="mt-2">{t.institute.body1}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D3557] uppercase tracking-wider text-xs border-b border-slate-200 pb-1 mb-2">
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

              <div className="pt-4 border-t border-slate-300 text-xs text-slate-600">
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
                <div className="w-24 h-24 rounded-full border-2 border-[#1D3557] p-1 flex flex-col items-center justify-center text-center text-[8px] font-bold text-[#1D3557] uppercase transform -rotate-4">
                  <span>{t.header.orgName}</span>
                  <span className="text-[10px] my-0.5">★ 25 ★</span>
                  <span>БИШКЕК 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={() => printOrDownloadOfficialLetter(language)}
            className="px-4 py-2 bg-[#1D3557] hover:bg-[#14253E] text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{language === 'ky' ? 'PDF жүктөп алуу' : language === 'en' ? 'Download PDF' : 'Скачать PDF'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
          >
            {language === 'ky' ? 'Жабуу' : language === 'en' ? 'Close' : 'Закрыть'}
          </button>
        </div>
      </div>
    </div>
  );
};
