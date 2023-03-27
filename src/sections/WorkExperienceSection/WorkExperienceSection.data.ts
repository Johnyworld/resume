import { WorkExp } from "types";

export const workExp: WorkExp[] = [
  {
    company: "flex",
    position: "Frontend Engineer",
    from: "2022.04",
    to: "현재",
    projects: [
      {
        name: "flex",
        link: "https://flex.team",
        explanations: [
          "flex는 기업이 겪는 사람과 조직에 관한 다양한 문제를 해결하고 있습니다."
        ]
      },
      {
        name: "Time tracking",
        skills: [
          "Typescript",
          "React",
          "Tanstack Query",
          "Styled Components",
          "Micro Frontend",
          "Radix UI"
        ],
        explanations: [
          "flex 제품 내에서 가장 많은 유저들이 사용하는 Time Tracking 제품은 구성원 평가의 근거가 되는 근무, 휴가와 같은 근태관리에 대한 문제를 해결합니다."
        ],
        dids: [
          "유저들의 목소리를 듣고, 문제를 찾아 제품을 개선합니다.",
          "시간과 관련 된 복잡한 문제들을 해결합니다.",
          "flex 제품 전반의 날짜, 시간 포맷을 일원화 하는 패키지 개발"
        ]
      }
    ]
  },
  {
    company: "언디파인드",
    position: "Frontend Developer",
    from: "2020.02",
    to: "2022.02",
    projects: [
      {
        name: "iScrim E-Sports Platform",
        link: "https://www.iscrim.com/Intro",
        skills: [
          "Typescript",
          "React",
          "Styled Components",
          "SVG",
          "Canvas",
          "Storybook",
          "MobX",
          "I18Next"
        ],
        explanations: [
          "전 세계 아마추어 E-Sports 생태계를 만들기 위해 시작 된 서비스입니다. 초기 멤버로서, 프론트엔드 전반적인 부분을 리드 했으며 MAU 30,000 을 달성하였습니다."
        ],
        dids: [
          "Downloable 토너먼트 대진표 화면 구현 (SVG, Canvas)",
          "데이터 그래프화",
          "Socket 기술을 이용한 실시간 반응 웹 애플리케이션",
          "Storybook UI 컴포넌트 문서화",
          "Atomic Design System",
          "다양한 리액트 커스텀 훅 개발",
          "다국어",
          "다크모드",
          "반응형 웹"
        ]
      },
      {
        name: "iScrim UI 라이브러리 제작",
        skills: ["Typescript", "React", "Styled Component", "NPM"],
        explanations: [
          "iScrim 플랫폼에 적용하기 위해 리액트 UI 라이브러리를 NPM package로 배포했습니다."
        ],
        dids: [
          "iScrim 플랫폼 UI 라이브러리 제작 (Npm package)",
          "검색 가능한 Dropdown 메뉴 등 20여개의 컴포넌트",
          "UI 라이브러리 문서 웹페이지 제작"
        ]
      }
    ]
  }
];
