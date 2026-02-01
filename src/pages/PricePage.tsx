import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { WebPageSchema, ServiceSchema } from '../components/SchemaMarkup';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';

const PRICE_FAQS = [
  {
    question: '강서 노래방 가격은 시간대에 따라 다른가요?',
    answer:
      '기본적인 룸 이용 가격은 시간대와 관계없이 동일합니다. 다만 주말이나 공휴일 전날에는 예약이 몰리기 때문에 일부 프리미엄 룸의 경우 주말 가격이 별도로 적용될 수 있습니다. 정확한 가격은 방문 전 전화 상담 시 안내해 드리며, 현장에서 갑자기 다른 금액이 청구되는 일은 없습니다.',
  },
  {
    question: '주류는 반드시 시켜야 하나요?',
    answer:
      '강서 노래방 이용 시 기본 주류 주문은 필수입니다. 이는 유흥업소 특성상 주류 서비스가 기본 포함된 구조이기 때문입니다. 양주, 맥주, 와인 등 다양한 주류를 보유하고 있으며, 예산에 맞는 주류를 추천해 드립니다. 주류 반입은 불가하며, 매장 내 메뉴에서 선택해 주셔야 합니다.',
  },
  {
    question: '카드 결제가 가능한가요?',
    answer:
      '네, 신용카드와 체크카드 모두 결제 가능합니다. 현금 결제 시 약간의 할인이 적용되는 경우가 있으니 상담 시 문의해 주세요. 계산서 발급도 가능하며, 법인카드 결제도 정상적으로 처리됩니다. 세금계산서가 필요하신 경우 사전에 말씀해 주시면 발급해 드립니다.',
  },
  {
    question: '예산이 한정되어 있는데 이용할 수 있나요?',
    answer:
      '물론입니다. 사전 상담 시 예산을 말씀해 주시면 그에 맞는 코스를 추천해 드립니다. 무리한 업셀링이나 강압적인 추가 주문 권유는 하지 않습니다. 정해진 예산 안에서 최대한 만족스러운 경험을 제공하는 것이 저희의 방침이며, 실제로 예산 범위 내에서 이용하신 분들의 만족도가 높습니다.',
  },
  {
    question: '단체 할인이 있나요?',
    answer:
      '10인 이상 단체 이용 시 별도 패키지 가격이 적용됩니다. 회사 회식이나 동호회 모임 등 단체 예약의 경우, 인원과 예산에 맞춘 맞춤 코스를 제안해 드립니다. 단체 예약은 최소 하루 전까지 연락해 주시면 준비가 가능하며, 대형 룸 배정과 주류 패키지 할인이 함께 적용됩니다.',
  },
];

export default function PricePage() {
  return (
    <>
      <SEOHead
        title="강서 노래방 가격 | 2025 최신 룸비·주류·서비스 요금표"
        description="강서 노래방 가격을 투명하게 공개합니다. 룸 이용료, 주류 가격, 매니저 서비스 비용까지 모든 항목을 사전에 안내해 드립니다. 강서 노래방 가격이 궁금하셨다면 이 페이지에서 확인하세요. 예산별 맞춤 코스 안내와 단체 할인 정보도 함께 제공합니다. 합리적인 가격에 프리미엄 서비스를 경험하세요."
        canonical="https://gangseo-noraebang.com/price"
        keywords="강서 노래방 가격, 강서 노래방 요금, 강서 노래방 룸비, 강서 노래방 주류 가격, 강서구 노래방 가격, 강서 룸노래방 가격표"
      />
      <WebPageSchema
        name="강서 노래방 가격 안내"
        description="강서 노래방의 룸 이용료, 주류 가격, 매니저 서비스 비용을 투명하게 안내합니다."
        url="/price"
      />
      <ServiceSchema />

      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '가격 안내', href: '/price' },
        ]}
      />

      {/* ──── 가격 Hero ──── */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h1>
                <span className="keyword-glow">강서 노래방 가격</span> 안내
              </h1>
              <p>
                강서 노래방의 모든 가격을 투명하게 공개합니다.
                사전에 정확한 비용을 안내받고, 예산에 맞춰 편안하게 이용하세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 가격 철학 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <h2>강서 노래방 가격, 왜 투명해야 하는가</h2>
            <p>
              유흥 노래방을 이용할 때 가장 큰 불안 요소 중 하나가 바로 가격입니다.
              인터넷에 검색해 봐도 정확한 가격 정보를 찾기 어렵고,
              업소마다 기준이 달라 혼란스러운 경험을 하신 분들이 많을 것입니다.
              실제로 "강서 노래방 가격"을 검색하시는 분들 대부분이
              정확한 금액을 알고 싶어서 찾아오시는 경우입니다.
            </p>
            <p>
              강서 노래방은 이 문제를 정면으로 해결하고자 합니다.
              모든 요금 항목을 사전에 공개하고, 전화 상담 시에도 예상 총비용을 안내해 드립니다.
              현장에서 예상치 못한 금액이 추가되는 일은 없으며,
              만약 추가 비용이 발생하는 상황이 있다면 반드시 손님의 동의를 먼저 구합니다.
            </p>
            <p>
              아래 가격표는 기본 가격 기준이며, 시즌이나 특수 기간에 따라
              일부 변동이 있을 수 있습니다. 가장 정확한 가격은
              당일 전화 문의를 통해 확인하시는 것을 권장합니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 룸 이용 가격 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>룸 이용 가격표</h2>
              <p>
                룸 타입별 기본 이용 가격입니다.
                인원과 목적에 맞는 룸을 선택하실 수 있습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div style={{ overflowX: 'auto' }}>
              <table className="price-table">
                <thead>
                  <tr>
                    <th>룸 타입</th>
                    <th>수용 인원</th>
                    <th>기본 이용 시간</th>
                    <th>가격 (기준)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>스탠다드 룸</td>
                    <td>2~4인</td>
                    <td>2시간</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>디럭스 룸</td>
                    <td>4~6인</td>
                    <td>2시간</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>VIP 룸</td>
                    <td>6~10인</td>
                    <td>2시간</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>프레지덴셜 룸</td>
                    <td>10~20인</td>
                    <td>2시간</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="info-box">
              <p>
                <strong style={{ color: '#c9a84c' }}>참고:</strong> 위 가격은 기본 룸 이용료이며,
                주류 및 매니저 서비스 비용은 별도입니다.
                정확한 가격은 인원, 요일, 이용 시간에 따라 달라질 수 있으므로
                전화 상담을 통해 확인해 주세요.
                강서 노래방은 가격 정보를 숨기지 않습니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 주류 가격 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>주류 가격 안내</h2>
              <p>
                보유 중인 주류 목록과 가격대를 안내해 드립니다.
                예산에 맞는 주류를 선택하실 수 있습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div style={{ overflowX: 'auto' }}>
              <table className="price-table">
                <thead>
                  <tr>
                    <th>종류</th>
                    <th>대표 품목</th>
                    <th>가격대</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>양주 (위스키)</td>
                    <td>발렌타인, 윈저, 조니워커 등</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>양주 (프리미엄)</td>
                    <td>로얄살루트, 맥캘란, 헤네시 등</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>와인</td>
                    <td>레드/화이트 와인 다수 보유</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>맥주</td>
                    <td>국산/수입 맥주</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                  <tr>
                    <td>안주류</td>
                    <td>과일, 마른안주, 식사류</td>
                    <td className="price-highlight">전화 문의</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p style={{ marginTop: '1.5rem' }}>
              강서 노래방에서는 주류를 강매하지 않습니다.
              예산에 맞는 주류를 편하게 말씀해 주시면 추천해 드리며,
              과도한 업셀링은 하지 않습니다.
              반면 특별한 자리에서 고급 주류를 원하시는 경우에도
              다양한 프리미엄 라인업을 보유하고 있어 만족스러운 선택이 가능합니다.
            </p>
            <p>
              또한 안주류도 다양하게 준비되어 있습니다.
              과일 플래터가 가장 인기 있으며, 가벼운 마른안주부터
              식사 대용이 가능한 메뉴까지 구비하고 있습니다.
              주류와 안주를 합산한 예상 금액도 사전 상담 시 안내해 드립니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 서비스 비용 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>매니저 서비스 비용</h2>
              <p>
                매니저 서비스는 강서 노래방의 핵심 서비스입니다.
                비용 구조를 솔직하게 안내해 드립니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-2">
            <AnimatedSection animation="fade-in-left">
              <div className="card">
                <h3 className="card__title">기본 서비스 비용</h3>
                <p className="card__text">
                  매니저 서비스 비용은 기본 이용 시간(2시간) 기준으로 책정됩니다.
                  이 비용에는 매니저의 동석, 음료 서빙, 대화 서비스가 포함됩니다.
                  추가 시간 이용 시에는 30분 단위로 연장 비용이 발생하며,
                  연장 여부는 손님이 자유롭게 결정하실 수 있습니다.
                  절대 강제 연장은 없습니다.
                </p>
                <p className="card__text">
                  구체적인 서비스 비용은 매니저의 등급과 인원에 따라 달라지므로,
                  전화 상담 시 정확하게 안내받으실 수 있습니다.
                  총 예산을 말씀해 주시면 룸비, 주류, 서비스를 포함한
                  패키지 견적을 제안해 드립니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="card">
                <h3 className="card__title">추가 비용 안내</h3>
                <p className="card__text">
                  강서 노래방에서 발생할 수 있는 추가 비용 항목은 다음과 같습니다.
                  시간 연장(30분 단위), 추가 주류 주문, 추가 안주 주문이 대표적입니다.
                  이 모든 추가 항목은 손님이 직접 요청하시는 경우에만 발생하며,
                  일방적으로 추가되는 비용은 없습니다.
                </p>
                <p className="card__text">
                  팁(봉사료)은 별도이며, 의무 사항이 아닙니다.
                  서비스에 만족하셨을 때 자율적으로 진행하시면 되며,
                  팁을 주지 않으셨다고 해서 서비스 품질이 달라지는 일은 없습니다.
                  이 부분은 강서 노래방의 확고한 운영 방침입니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──── 예산별 코스 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>예산별 맞춤 코스 안내</h2>
              <p>
                예산 범위에 맞는 이용 코스를 안내해 드립니다.
                아래는 1인 기준 대략적인 예산 범위입니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" className="grid-3">
            <div className="card">
              <h3 className="card__title" style={{ color: '#c9a84c' }}>합리적 코스</h3>
              <p className="card__text">
                부담 없이 분위기를 경험해 보고 싶은 분들을 위한 코스입니다.
                스탠다드 룸에서 기본 주류와 함께 편안한 시간을 보내실 수 있습니다.
                처음 방문하시는 분들이 부담 없이 시작하기에 적합합니다.
                기본 2시간 이용 기준이며, 연장은 자유 선택입니다.
              </p>
            </div>

            <div className="card" style={{ border: '1px solid rgba(201,168,76,0.4)' }}>
              <h3 className="card__title" style={{ color: '#f7e98e' }}>추천 코스</h3>
              <p className="card__text">
                가장 많이 선택하시는 인기 코스입니다.
                디럭스 룸에서 중급 이상 양주와 함께
                여유로운 시간을 즐기실 수 있습니다.
                비즈니스 접대 시 가장 무난하게 선택하시는 구성이며,
                품격 있는 자리를 만들기에 충분합니다.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title" style={{ color: '#c9a84c' }}>프리미엄 코스</h3>
              <p className="card__text">
                VIP 룸에서 프리미엄 양주와 최고급 서비스를 경험하실 수 있는 코스입니다.
                특별한 접대나 기념일에 적합하며,
                모든 면에서 최상의 만족을 드리기 위해 준비된 구성입니다.
                전담 매니저가 배정되어 세심한 서비스를 제공합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <h2>강서 노래방 가격, 직접 확인하세요</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>
              정확한 견적은 전화 상담을 통해 빠르게 안내받으실 수 있습니다.
              인원, 예산, 원하시는 분위기를 말씀해 주시면
              최적의 코스를 추천해 드립니다.
            </p>
            <Link to="/system" className="cta-btn cta-glow">
              이용 시스템 알아보기
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>가격 관련 자주 묻는 질문</h2>
              <p>강서 노래방 가격에 대해 많이 문의하시는 내용을 정리했습니다.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FAQ faqs={PRICE_FAQS} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
