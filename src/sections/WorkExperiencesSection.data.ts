import { WorkExp } from 'types';

export const workExps: WorkExp[] = [
  {
    company: '언디파인드',
    position: 'Frontend Developer',
    from: '2020.02',
    to: '현재',
    projects: [
      {
        name: 'iScrim E-Sports Platform',
        link: 'https://www.iscrim.com/Intro',
        skills: ['Typescript', 'React', 'Styled Component', 'SVG', 'Canvas', 'Storybook', 'MobX', 'I18Next'],
        explanations: [
          '전 세계 아마추어 E-Sports 생태계를 만들기 위해 시작 된 서비스로, MAU 30,000 달성중인 iScrim E-Sports Platform 입니다.',
          '서비스의 초기 멤버로서, 프론트엔드 전반적인 부분을 리드 했습니다. 더 좋은 협업을 위해 파일 구조와 컴포넌트 패턴에 대해 많은 연구를 하게 된 계기가 되었습니다.',
        ],
        dids: [
          'Downloable 토너먼트 대진표 화면 구현 (SVG, Canvas)',
          '데이터 그래프화',
          'Socket 기술을 이용한 실시간 반응 웹 애플리케이션',
          'Storybook UI 컴포넌트 문서화',
          'Atomic Design System',
          '다양한 리액트 커스텀 훅 개발',
          '다국어',
          '다크모드',
          '반응형 웹',
        ],
      },
      {
        name: 'iScrim UI 라이브러리 제작',
        skills: ['Typescript', 'React', 'Styled Component', 'NPM'],
        explanations: ['iScrim 플랫폼에 적용하기 위해 리액트 UI 라이브러리를 NPM package로 배포했습니다.'],
        dids: [
          'iScrim 플랫폼 UI 라이브러리 제작 (Npm package)',
          '검색 가능한 Dropdown 메뉴 등 20여개의 컴포넌트',
          'UI 라이브러리 문서 웹페이지 제작',
        ],
      },
    ],
  },
];
