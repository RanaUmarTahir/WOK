import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-core-team',
  imports: [CommonModule],
  templateUrl: './core-team.component.html',
  styleUrl: './core-team.component.css',
})
export class CoreTeamComponent {
  images: string[] = [
    '../../assets/images/arbabNazir.jpg',
    '../../assets/images/umarTahir.jpg',
    '../../assets/images/umarTariq.jpg',
    '../../assets/images/usmanMunir.jpg',
    '../../assets/images/ahmed.jpg',
    '../../assets/images/qasim.jpg',
    '../../assets/images/furqanBajwa.jpg',
    '../../assets/images/usmanSafdar.jpg',
    '../../assets/images/asad.jpg',
    '../../assets/images/abdulrehmanwb.jpg',
  ];
  users: any = [
    {
      name: 'Arbab Nazir',
      designation: 'Director',
      details:
        "Introducing our esteemed Director, a dynamic leader with a robust academic background, holding a BS in Mass Communication, an MSc in Mass Communication, and an MA in English. With a distinguished career, he has served as Deputy Convener of the Insaf Students Federation (ISF) Islamabad, championing students' rights, societal improvement, and the principles of justice, knowledge, and tolerance. He has also held the role of Vice Chairman of the Punjab Federal Alliance, promoting Punjab's rich cultural heritage. Additionally, his contributions as an Ambassador for the Federal Tax Ombudsman (FTO) have advanced tax awareness initiatives by the Government of Pakistan, and his role as an Ambassador for the Women Film Festival underscores his commitment to cultural and social causes.",
      image: '../../assets/images/arbabNazir.jpg',
    },
    {
      name: 'Umar Tahir',
      designation: 'Deputy Director',
      details:
        "We are pleased to introduce our Deputy Director, a seasoned IT professional with a BS in Computer Science and a Certificate in Information Technology. His distinguished career includes serving as Vice President of the Insaf Students Federation (ISF) Pakistan, where he advocated for students' rights, societal betterment, and the principles of justice, knowledge, and tolerance, while also leading as the Information & Media Department Head at the central level. He has been an active member of the Punjab Students Council, promoting Punjab’s vibrant culture. Additionally, he served as Graphics Lead at MOST Services, a multinational institute offering IOSH, NEBOSH, and ISO courses, and as Regional Deputy Lead for the Central Punjab Government’s Information Ministry Team, showcasing his expertise in media and communication.",
      image: '../../assets/images/umarTahir.jpg',
    },
    {
      name: 'Umar Tariq',
      designation: 'Secretary General',
      details:
        'We are proud to introduce our Secretary General, a distinguished professional lawyer with an LLB degree. A passionate advocate for cultural preservation, he founded the Punjab Students Council at his university, dedicating himself to the promotion of Punjabi culture. His legal journey began with valuable experience as a Learner at the Supreme Court, where he honed his expertise and commitment to justice.',
      image: '../../assets/images/umarTariq.jpg',
    },
    {
      name: 'Usman Munir',
      designation: 'Head of Programs and Initiatives',
      details:
        "We are delighted to present our Head of Programs and Initiatives, a skilled UX/UI designer with a BS in Computer Science. He served as President of the Insaf Students Federation in District Narowal, leading efforts to champion students' rights and societal progress. During the COVID-19 pandemic, he demonstrated exceptional leadership as Captain of the District in the Tigers Force, an initiative by the Pakistan Government to raise awareness and provide volunteer services, showcasing his commitment to community welfare and impactful program execution.",
      image: '../../assets/images/usmanMunir.jpg',
    },
    {
      name: 'Muhammad Ahmed',
      designation: 'Finance Officer',
      details:
        'We are pleased to introduce our Finance Officer, a seasoned Real Estate Businessman with an MBA degree. He has been actively involved with the Muslim Students Federation (MSF), contributing to student welfare and community initiatives. Additionally, his participation in the Women Film Festival highlights his dedication to supporting cultural and social causes.',
      image: '../../assets/images/ahmed.jpg',
    },
    {
      name: 'Qasim Jahangir',
      designation: 'Head of Human Resource',
      details:
        'We are proud to introduce our Head of Human Resource, an accomplished professional with an MBA degree and extensive experience as an Accounting and Finance specialist in multinational firms. Committed to cultural and social causes, they have actively participated in the Punjab Federal Alliance to promote Punjabi culture, contributed to the Women Film Festival, and engaged with the Muslim Students Federation to support student welfare and community initiatives.',
      image: '../../assets/images/qasim.jpg',
    },
    {
      name: 'Muhammad Usman Safdar',
      designation: 'Head of Development',
      details:
        'We are thrilled to introduce our Head of Development, a skilled ServiceNow Developer with a BS in Computer Science, currently excelling in a multinational firm. Demonstrating a strong commitment to community and culture, they served as Vice Chairman of the Punjab Students Council, promoting Punjabi heritage. Additionally, their volunteer work at the National Assembly underscores their dedication to public service and civic engagement.',
      image: '../../assets/images/usmanSafdar.jpg',
    },
    {
      name: 'Furqan Bajwa',
      designation: 'Head of Legal Department',
      details:
        'We are proud to introduce our Legal Department Head, a distinguished professional lawyer with an LLB degree. A passionate advocate for cultural preservation, he founded the Punjab Students Council at his university, dedicating himself to the promotion of Punjabi culture. His legal journey began with valuable experience as a Learner at the Supreme Court, where he honed his expertise and commitment to justice.',
      image: '../../assets/images/furqanBajwa.jpg',
    },
    {
      name: 'AsadUllah',
      designation: 'Head of Communications',
      details:
        'We are delighted to introduce our Head of Communications, a dedicated individual pursuing an LLB degree. With a strong passion for social good, they have actively engaged in welfare initiatives in rural villages and played a significant role in organizing and supporting Islamic events, reflecting their commitment to community welfare and effective communication.',
      image: '../../assets/images/asad.jpg',
    },
    {
      name: 'Abdul Rehman',
      designation: 'Head of Campaigns',
      details:
       "We are excited to introduce our Head of Campaigns, a dynamic overseas businessman with a BA degree. Renowned for his organizational prowess, he has extensive experience managing Islamic events, showcasing his ability to lead impactful initiatives. His strategic vision and global perspective drive our campaigns to foster meaningful engagement and positive change.",
      image: '../../assets/images/abdulrehmanwb.jpg',
    },
  ];

  getSlides(): (string | null)[][] {
    const slides: (string | null)[][] = [];
    const len = this.images.length;

    for (let i = 0; i < len; i++) {
      const left = i > 0 ? this.images[i - 1] : null;
      const center = this.images[i];
      const right = i < len - 1 ? this.images[i + 1] : this.images[0];
      slides.push([left, center, right]);
    }
    return slides;
  }
}
