import { Project } from "types";

const tumssum: Project = {
  name: "틈씀이 가계부 (Beta)",
  // link: 'https://tumssum.com',
  skills: [
    "Typescript",
    "Preact",
    "Redux-toolkit",
    "Parcel",
    "SCSS",
    "Storybook",
    "Python",
    "Django",
    "NginX(uWSGI)",
    "AWS EC2",
    "AWS Route53",
    "AWS RDS - MySQL"
  ],
  images: [
    {
      alt: "tumssum-thumb-1",
      src: "https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/tumssum-1.jpg"
    }
  ],
  explanations: [
    "구글 스프레드시트로 가계부를 오랫동안 써 왔는데, 더 편리하게 가계부를 사용하고 싶다는 생각으로 개발중입니다. 최소 기능으로 먼저 배포하여 실제로 사용해보며 테스트 하고 있습니다. 달력, 보드 등에서 드래그 앤 드롭으로 쉽게 관리할 수 있습니다.",
    "아쉽게도 지금은 유지비를 없애기 위해, 서비스 중지 중입니다."
  ],
  dids: [
    "Monthly 캘린더 가계부 관리 화면",
    "OAuth2.0 소셜 로그인",
    "이메일 로그인",
    "Json Web Token",
    "드래그 & 드롭",
    "Atomic Design System",
    "SVG 그래프",
    "HTTPS",
    {
      content: "관계형 데이터",
      link: "https://drawsql.app/johnyworld/diagrams/tumssum#"
    },
    "아이콘 세트 제작",
    "Storybook 컴포넌트 문서화",
    "반응형 웹"
  ]
};

const morgan: Project = {
  name: "법률사무소 모건 홈페이지 개발",
  link: "https://morganlaw.co.kr",
  skills: [
    "NextJS",
    "AWS EC2",
    "AWS S3",
    "AWS RDS - MariaDB",
    "Netlify",
    "Vercel",
    "Sendgrid"
  ],
  images: [
    {
      alt: "morgan-thumb-1",
      src: "https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/morgan-1.jpg"
    }
  ],
  explanations: [
    "새로 사무실을 개업하는 변호사 지인의 부탁을 받아 작업한 사이트입니다. NextJS로 작업하였습니다. Serverless 라 그런건지 S3에 사진 업로드가 안돼서 고생 했던 기억이 생생합니다. 업로드용 EC2 서버를 따로 두는 방법으로 해결했습니다."
  ],
  dids: [
    "관리자 페이지 개발: 문의, 글 작성 및 관리",
    "이메일 인증 로그인 개발",
    "구글, 네이버 SEO",
    "Google Analytics",
    "Google Cloud Platform (Email)",
    "반응형 웹"
  ]
};

const daylog: Project = {
  name: "Daylog (서비스 중지)",
  skills: [
    "React",
    "NodeJS",
    "GraphQL",
    "Prisma",
    "Apollo",
    "HTML5 Canvas",
    "Heroku",
    "Sendgrid"
  ],
  images: [
    {
      alt: "morgan-thumb-1",
      src: "https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/daylog-1.jpg"
    },
    {
      alt: "morgan-thumb-2",
      src: "https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/daylog-2.jpg"
    },
    {
      alt: "morgan-thumb-3",
      src: "https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/daylog-3.jpg"
    },
    {
      alt: "morgan-thumb-4",
      src: "https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/daylog-4.jpg"
    }
  ],
  explanations: [
    "시간단위 데일리 리포트를 클릭만으로 간편하게 쓸 수 있는 일정 관리 서비스. 기획부터 배포까지 모든 과정을 혼자서 진행했던 첫 프로젝트였습니다. GraphQL을 이해하는데에 많은 공부가 되었습니다."
  ],
  dids: [
    "Canvas 그래프 제작",
    "서로 응원할 수 있는 SNS 형태",
    "유저간 팔로우 기능",
    "좋아요 기능",
    "아이콘 세트 제작"
  ]
};

export const sideProjects: Project[] = [tumssum, morgan];
