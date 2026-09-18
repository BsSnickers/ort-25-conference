import { Language } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

/**
 * Generates official information letter adhering strictly to state standards
 * and dynamic localization (БББаОБ / ЦООМО / CEATM).
 */
export function printOrDownloadOfficialLetter(language: Language) {
  const t = translations[language];

  const printWindow = window.open('', '_blank', 'width=850,height=1100');
  if (!printWindow) {
    alert('Пожалуйста, разрешите всплывающие окна для скачивания официального письма в PDF.');
    return;
  }

  const printContent = `
<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <title>${t.hero.title} — ${t.hero.titleAccent}</title>
  <style>
    @page {
      size: A4;
      margin: 20mm 18mm 20mm 22mm;
    }
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.45;
      color: #151A2C;
      background: #FFFFFF;
      margin: 0;
      padding: 30px 40px;
    }
    .header-bar {
      border-bottom: 2px solid #151A2C;
      padding-bottom: 14px;
      margin-bottom: 20px;
      text-align: center;
    }
    .org-title {
      font-size: 13pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .ministry-title {
      font-size: 9pt;
      color: #475569;
      margin-top: 2px;
    }
    .letter-title {
      font-size: 15pt;
      font-weight: 900;
      letter-spacing: 1.5px;
      margin-top: 15px;
      text-transform: uppercase;
    }
    .conf-name {
      font-size: 12.5pt;
      font-weight: 800;
      color: #151A2C;
      margin: 8px 0 4px 0;
    }
    .conf-anniv {
      font-size: 11pt;
      font-weight: 700;
      color: #334155;
      margin-bottom: 12px;
    }
    .meta-table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0 20px 0;
      font-size: 9.5pt;
    }
    .meta-table td {
      border: 1px solid #CBD5E1;
      padding: 8px 12px;
      background: #F8FAFC;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 18px;
      margin-bottom: 6px;
      border-bottom: 1px solid #E2E8F0;
      padding-bottom: 3px;
    }
    p {
      margin: 6px 0;
      text-align: justify;
    }
    ol {
      margin: 6px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 4px;
    }
    .contacts-box {
      margin-top: 25px;
      border-top: 2px solid #151A2C;
      padding-top: 12px;
      font-size: 9.5pt;
    }
    .seal-row {
      margin-top: 35px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .stamp-box {
      width: 105px;
      height: 105px;
      border: 2px solid #151A2C;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 8pt;
      font-weight: 800;
      color: #151A2C;
      transform: rotate(-4deg);
    }
    @media print {
      body { padding: 0; }
      .no-print-bar { display: none !important; }
    }
    .no-print-bar {
      position: sticky;
      top: 0;
      background: #151A2C;
      color: white;
      padding: 12px 20px;
      margin: -30px -40px 25px -40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: sans-serif;
    }
    .btn {
      background: #334155;
      color: white;
      border: none;
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 2px;
    }
    .btn:hover {
      background: #475569;
    }
    .btn-close {
      background: #1E293B;
      margin-left: 8px;
    }
  </style>
</head>
<body>
  <div class="no-print-bar">
    <span style="font-weight: 700; letter-spacing: 0.5px;">
      ${t.header.orgName} • ${t.header.anniversaryBadge} — Официальное информационное письмо
    </span>
    <div>
      <button class="btn" onclick="window.print()">Распечатать / Сохранить в PDF</button>
      <button class="btn btn-close" onclick="window.close()">Закрыть</button>
    </div>
  </div>

  <div class="header-bar">
    <div class="org-title">${t.header.orgName}</div>
    <div class="ministry-title">${t.hero.organizers}</div>
    <div class="letter-title">ИНФОРМАЦИОННОЕ ПИСЬМО</div>
    <div class="conf-name">${t.hero.title}</div>
    <div class="conf-anniv">${t.hero.titleAccent}</div>
  </div>

  <table class="meta-table">
    <tr>
      <td><strong>Дата:</strong> ${t.hero.dateMeta}</td>
      <td><strong>Место:</strong> ${t.hero.locationMeta}</td>
      <td><strong>Формат:</strong> Очно и Онлайн</td>
    </tr>
  </table>

  <div class="section-title">Цель конференции</div>
  <p>${t.concept.col1}</p>
  <p>${t.concept.col2}</p>

  <div class="section-title">Об организации</div>
  <p>${t.institute.lead}</p>
  <p>${t.institute.body1}</p>

  <div class="section-title">Основные направления (9 направлений)</div>
  <ol>
    ${t.tracks.items.map(item => `<li><strong>${item.title}:</strong> ${item.description}</li>`).join('')}
  </ol>

  <div class="section-title">Организаторы</div>
  <ul>
    ${t.partners.orgs.map(o => `<li><strong>${o.name}</strong> — ${o.status}</li>`).join('')}
  </ul>

  <div class="contacts-box">
    <strong>Контакты оргкомитета:</strong><br>
    ${t.footer.brandDesc}<br>
    Адрес: ${t.footer.address}<br>
    Телефоны: ${t.footer.phones.join(', ')}<br>
    Email: ${t.footer.email}
  </div>

  <div class="seal-row">
    <div>
      <strong>Оргкомитет конференции</strong><br>
      ${t.header.orgName}<br>
      Председатель оргкомитета: ____________________
    </div>
    <div class="stamp-box">
      <span>${t.header.orgName}</span>
      <span style="font-size: 11pt; margin: 2px 0;">★ 25 ★</span>
      <span>БИШКЕК 2026</span>
    </div>
  </div>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(printContent);
  printWindow.document.close();
}
