import { Project } from 'types';

const modernPirates: Project = {
  name: 'Modern Pirates',
  link: 'http://modern-pirates.s3-website.ap-northeast-2.amazonaws.com/',
  skills: ['Javascript', 'HTML5 Canvas'],
  images: [
    {
      alt: 'modern-pirates-thumb-1',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/mordern-pirates-1.jpg',
    },
  ],
  explanations: [
    '자바스크립트와 친해지기 위해 게임을 만들어봐야지! 라는 생각으로 개발한 횡스크롤 포트리스류 게임입니다. 이 프로젝트가 제게 의미 있던 이유는, 여러 Canvas 관련 강의를 마친 후 그것을 바탕으로 직접 기획하고 로직을 생각해가며 개발한 게임이기 때문입니다.',
  ],
};

const gangsOfGalaxy: Project = {
  name: 'Gangs of Galaxy - 개발중',
  skills: ['HTML5 Canvas', 'Typescript', 'Socket IO'],
  images: [
    {
      alt: 'gog-thumb-1',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/gog-3.gif',
    },
    {
      alt: 'gog-thumb-2',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/gog-1.jpg',
    },
  ],
  explanations: [
    '멀티 플레이어 게임을 만들어보고 싶어서 개발을 시작했습니다. 주요 기능들과 간단한 전투 정도만 구현 한 다음 잠시 개발을 중단 한 상태입니다. 중단 한 이유는, 아무래도 게임 개발은 본업보다는 취미에 가깝고 지금은 본업을 위한 스킬을 더 배워야 할 시기라고 판단했기 때문입니다. 여유가 조금 생기면 꼭 완성하고 싶습니다.',
  ],
  dids: [
    '마우스 위치 기반 포탑 각도 회전(삼각함수)',
    'Infinity Background 렌더링',
    '폭발 애니메이션 구현',
    '배경 무한 루프 구현',
  ],
};

const rpgMoving: Project = {
  name: 'RPG Moving',
  link: 'http://rpg-moving.s3-website.ap-northeast-2.amazonaws.com/',
  skills: ['Javascript', 'HTML5 Canvas'],
  images: [
    {
      alt: 'rpg-thumb-1',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/slider/thumbnail/pc/rpg-moving.jpg',
    },
  ],
  dids: ['충돌판정 구현', '움직임 애니메이션 구현'],
};

const reactDrag: Project = {
  name: 'React UI playground',
  link: 'https://johnyworld.github.io/react-ui-playground/',
  skills: ['React'],
  images: [
    {
      alt: 'react-drag-thumb-1',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/react-drag-thumb-1-min.png',
    },
  ],
  explanations: ['리액트 UI 연습 공간'],
};

const conv250: Project = {
  name: 'Conversation Staters 250',
  link: 'http://conv-250.s3-website.ap-northeast-2.amazonaws.com/',
  skills: ['Javascript'],
  explanations: [
    '영어 회화를 공부하는 사람들을 위해 만들었습니다. 어떤 주제로 대화를 해야할지 떠오르지 않는 경우 유용합니다.',
  ],
};

const dowCross: Project = {
  name: 'DOW Crossroad Cards',
  link: 'http://dow-crossroad.s3-website.ap-northeast-2.amazonaws.com',
  skills: ['Javascript'],
  explanations: [
    '보드게임 Dead of Winter를 플레이 하면서, 기본으로 제공되는 카드 덱의 불편함을 개선하고자 개발했습니다. 직접 사용하기 위해 만드는 애플리케이션 만큼 재미있는 개발도 없는 것 같습니다.',
  ],
};

const johnyworld2019: Project = {
  name: 'Johnyworld 2019',
  link: 'http://johnyworld.com',
  skills: ['React', 'Javascript'],
  images: [
    {
      alt: 'johnyworld2019-thumb-1',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/johnyworld2019-1.jpg',
    },
    {
      alt: 'johnyworld2019-thumb-2',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/johnyworld2019-2.jpg',
    },
  ],
  explanations: [
    '리액트를 처음 배우면서 만들었던 포트폴리오 사이트입니다. 애니메이션을 주기 위해 dom을 직접 컨트롤 하기도 하고 여러가지 말도 안되는 코드들이 많았지만, 리액트의 첫 시작이었던 만큼 애정이 가는 프로젝트였습니다.',
  ],
};

const johnyworld2018: Project = {
  name: 'Johnyworld 2018',
  link: 'http://johnyworld.com/2018',
  skills: ['jQuery'],
  images: [
    {
      alt: 'johnyworld2018-thumb-1',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/johnyworld2018-1.jpg',
    },
    {
      alt: 'johnyworld2018-thumb-2',
      src: 'https://johnyworld2019.s3.ap-northeast-2.amazonaws.com/images/resume/johnyworld2018-2.jpg',
    },
  ],
  explanations: [
    '디자이너에서 웹 퍼블리셔로 전향하기 위해 만들었던 포트폴리오입니다. Javascript와 jQuery를 처음 배우던 시기입니다.',
  ],
};

export const toyProjects: Project[] = [
  modernPirates,
  gangsOfGalaxy,
  rpgMoving,
  reactDrag,
  conv250,
  dowCross,
  johnyworld2019,
  johnyworld2018,
];
