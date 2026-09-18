import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

async function createResume() {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595.28, 841.89]) // A4 size in points
  const { width, height } = page.getSize()

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique)

  const primaryColor = rgb(0.1, 0.15, 0.25) // Dark slate
  const accentColor = rgb(1.0, 0.27, 0.0) // InnoCapsule Orange (#FF4500)
  const textColor = rgb(0.2, 0.2, 0.25)
  const mutedColor = rgb(0.45, 0.45, 0.5)
  const lineColor = rgb(0.85, 0.87, 0.9)

  let y = height - 42

  // 1. Header Name
  page.drawText('KURUVA MANIKANTA REDDY', {
    x: 40,
    y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  })
  y -= 16

  // Subtitle / Title
  page.drawText('Computer Science Engineering Student | Full-Stack Developer | AI Enthusiast', {
    x: 40,
    y,
    size: 9.5,
    font: fontBold,
    color: accentColor,
  })
  y -= 14

  // Contact Info Row
  const contactText = 'Phone: +91 7997702136  |  Email: manikanta79977@gmail.com  |  Location: Adoni, Kurnool, AP, India'
  page.drawText(contactText, {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: mutedColor,
  })
  y -= 12

  // Links Row
  const linksText = 'LinkedIn: linkedin.com/in/manikanta-reddy-926b2837b  |  GitHub: github.com/mani-reddy-02'
  page.drawText(linksText, {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: mutedColor,
  })
  y -= 10

  // Divider line
  page.drawLine({
    start: { x: 40, y },
    end: { x: width - 40, y },
    thickness: 1,
    color: accentColor,
  })
  y -= 16

  // Helper for Section Headers
  const drawSection = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    })
    y -= 4
    page.drawLine({
      start: { x: 40, y },
      end: { x: width - 40, y },
      thickness: 0.75,
      color: lineColor,
    })
    y -= 12
  }

  // 2. Professional Summary
  drawSection('Professional Summary')
  const summaryLines = [
    'Computer Science Engineering student with a Diploma in Computer Engineering (92.17%) and hands-on experience in full-stack',
    'web development, AI-driven applications, database systems, and real-world software projects. Experienced in developing web',
    'platforms using React.js, Node.js, Express.js, PHP, MySQL, PostgreSQL, and modern development tools. Worked on healthcare,',
    'room booking, logistics, career-tech, and technology platforms with strong skills in REST APIs, authentication, and AI Agents.',
  ]
  summaryLines.forEach((line) => {
    page.drawText(line, { x: 40, y, size: 8.5, font: fontRegular, color: textColor })
    y -= 11
  })
  y -= 6

  // 3. Technical Skills
  drawSection('Technical Skills')
  const skills = [
    { cat: 'Programming:', list: 'C, C++, Core Java, Python, JavaScript, PHP' },
    { cat: 'Frontend:', list: 'HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap' },
    { cat: 'Backend & DB:', list: 'Node.js, Express.js, PHP, MySQL, PostgreSQL, Supabase, Firebase, REST APIs' },
    { cat: 'Data & AI:', list: 'Python, Pandas, NumPy, Scikit-learn, Machine Learning, NLP, Generative AI, AI Agents' },
    { cat: 'Tools & DevOps:', list: 'Git, GitHub, Docker, VS Code, Android Studio, XAMPP' },
    { cat: 'Core Concepts:', list: 'Data Structures & Algorithms, OOP, DBMS, Software Engineering, Authentication' },
  ]
  skills.forEach((s) => {
    page.drawText(s.cat, { x: 40, y, size: 8.5, font: fontBold, color: primaryColor })
    page.drawText(s.list, { x: 130, y, size: 8.5, font: fontRegular, color: textColor })
    y -= 11.5
  })
  y -= 6

  // 4. Projects & Experience
  drawSection('Projects & Practical Experience')
  const projects = [
    {
      title: 'MediQuee — Healthcare Platform',
      role: 'Full-Stack Developer | React.js, Supabase, PostgreSQL, AI Chatbot',
      desc: 'Developed healthcare platform connecting patients with hospitals and labs. Built OP appointments, video consultations, and integrated cloud database with MediQuee AI chatbot.',
    },
    {
      title: 'Mantralayam Rooms Booking — Web Accommodation Platform',
      role: 'Full-Stack Developer | PHP, MySQL, Bootstrap, JavaScript, AJAX',
      desc: 'Engineered web booking platform with real-time room availability, date validation, admin management, and email/SMTP communication functionality.',
    },
    {
      title: 'dParcels — Real-Time Parcel Delivery Platform',
      role: 'Developer | Web Technologies, AI Agent Integration, Git/GitHub',
      desc: 'Built logistics parcel delivery system in a 2-member team, featuring automated workflow tracking and intelligent AI Agent support with an integrated chatbot.',
    },
    {
      title: 'EmpowerPath — AI-Driven Career & Entrepreneurship Ecosystem',
      role: 'Project Developer | Python, Generative AI, AI Agents, ML',
      desc: 'Designed platform providing AI career guidance, resume feedback, mock interviews, opportunity matching, and startup discovery for students and job seekers.',
    },
    {
      title: 'Banking ATM Facial Recognition',
      role: 'Team Leader | Java, XML, MySQL, Android Studio, Biometrics',
      desc: 'Led a 6-member team in creating a biometric ATM security prototype using facial and iris recognition for enhanced identity verification.',
    },
  ]
  projects.forEach((p) => {
    page.drawText(p.title, { x: 40, y, size: 9, font: fontBold, color: primaryColor })
    y -= 10.5
    page.drawText(p.role, { x: 40, y, size: 8, font: fontOblique, color: accentColor })
    y -= 10
    page.drawText(p.desc, { x: 40, y, size: 8, font: fontRegular, color: textColor })
    y -= 12.5
  })
  y -= 4

  // 5. Education
  drawSection('Education')
  const edu = [
    {
      deg: 'Bachelor of Technology (B.Tech) — Computer Science Engineering',
      inst: 'Madanapalle Institute of Technology & Science (MITS)',
      score: '2025 – 2028 | Currently Pursuing',
    },
    {
      deg: 'Diploma in Computer Engineering (Score: 92.17%)',
      inst: 'Bheema Institute of Technology and Science, Adoni, Kurnool',
      score: '2022 – 2025 | Percentage: 92.17%',
    },
    {
      deg: 'SSC — State Board (Score: 80.8%)',
      inst: 'Z.P.H.S High School, Kammara Chedhu, Kurnool',
      score: '2021 – 2022 | Percentage: 80.8%',
    },
  ]
  edu.forEach((e) => {
    page.drawText(e.deg, { x: 40, y, size: 8.5, font: fontBold, color: primaryColor })
    page.drawText(e.score, { x: width - 200, y, size: 8, font: fontRegular, color: mutedColor })
    y -= 10.5
    page.drawText(e.inst, { x: 40, y, size: 8, font: fontRegular, color: textColor })
    y -= 12
  })
  y -= 4

  // 6. Certifications & Achievements (2-column layout)
  drawSection('Training, Certifications & Achievements')
  const certs = [
    '• Technical Training: Groww India Solutions (6 Months Web & Python)',
    '• Generative AI — Google Cloud Careers',
    '• Introduction to Data Science — GUVI / HCL',
    '• Java Programming — Udemy',
    '• NPTEL — Soft Skills Certification',
  ]
  const achievements = [
    '• Smart India Hackathon (SIH) — College Level Selected',
    '• School People Leader (SPL)',
    '• Chess Winner — Diploma College Sports Meet',
    '• Languages: English, Telugu, Kannada, Hindi',
  ]
  const startY = y
  certs.forEach((c) => {
    page.drawText(c, { x: 40, y, size: 8, font: fontRegular, color: textColor })
    y -= 11
  })
  let yRight = startY
  achievements.forEach((a) => {
    page.drawText(a, { x: 320, y: yRight, size: 8, font: fontRegular, color: textColor })
    yRight -= 11
  })

  const pdfBytes = await pdfDoc.save()
  fs.writeFileSync('public/Manikanta_Reddy_Resume.pdf', pdfBytes)
  console.log('Successfully generated public/Manikanta_Reddy_Resume.pdf!')
}

createResume().catch(console.error)
