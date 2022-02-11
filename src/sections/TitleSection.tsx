import React from 'react';
import Descriptions from '../components/atoms/Descriptions';
import Section from '../components/wrappers/Section';
import contact from '../data/data.contact';

export interface TitleSectionProps {}

const TitleSection: React.FC<TitleSectionProps> = () => {
  return (
    <Section>
      <h1>사용자 중심.</h1>
      <h2>웹 프론트엔드 개발자 김재환이에요.</h2>
      <p>
        3년차 웹 프론트엔드 개발자로 성장하고 있습니다. 2년간 웹 플랫폼 서비스의 초기 멤버로 서비스를 기획. 개발,
        운영하였습니다. MAU 30,000명을 달성 하였고 유저들의 요구사항과, 운영 중 발생하는 여러 문제들을 해결하였습니다.
      </p>
      <h3>생산적인 동반자.</h3>
      <p>
        회사는 나의 고객이고 회사와 나는 함께 일 하고 성장하는 동반자 입니다. 비즈니스를 함께 고민하고 기여하는 적극적인
        개발자의 모습을 추구합니다. 그저 주어진 제품만 뚝딱 만드는 것이 아니라 내가 가진 아이디어와 경험들을 꺼내어 여러
        방면으로 비즈니스에 도움이 되고자 합니다.
      </p>
      <h3>코드는 튼튼히.</h3>
      <p>
        작고 튼튼한 코드와 컴포넌트 작성을 지향합니다. 어떻게 하면 효율적으로 중복을 없앨까? 어떻게 하면 미래의 나를
        포함한 다른 개발자들이 쉽게 이해할 수 있을까? 고민하고, 배우고, 시도합니다.
      </p>
      <Descriptions descriptions={contact} />
    </Section>
  );
};

export default TitleSection;
