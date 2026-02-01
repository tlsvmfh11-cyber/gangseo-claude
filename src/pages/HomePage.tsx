import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { WebPageSchema } from '../components/SchemaMarkup';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';

const HOME_FAQS = [
  {
    question: '강서 노래방은 일반 노래방과 어떻게 다른가요?',
    answer:
      '강서 노래방은 단순히 노래만 부르는 일반 노래방과는 운영 형태가 다릅니다. 프리미엄 룸에서 전담 매니저와 함께 편안한 시간을 보내실 수 있으며, 주류 서비스와 함께 격식 있는 접객 시스템을 갖추고 있습니다. 비즈니스 접대나 특별한 모임에 적합한 공간으로, 이용 전 시스템과 가격을 충분히 안내해 드리고 있습니다.',
  },
  {
    question: '처음 방문인데 어떻게 이용하면 되나요?',
    answer:
      '처음 방문하시는 분들이 가장 많이 걱정하시는 부분을 잘 알고 있습니다. 전화 또는 문의를 통해 사전 상담을 진행한 뒤 방문하시면 됩니다. 도착 후에는 담당자가 직접 시스템과 이용 방법을 상세히 안내해 드리므로 부담 없이 오시면 됩니다. 사전에 예산과 원하시는 분위기를 말씀해 주시면 그에 맞게 준비해 드립니다.',
  },
  {
    question: '강서 노래방의 영업 시간은 어떻게 되나요?',
    answer:
      '저희 강서 노래방은 매일 오후 6시부터 새벽 5시까지 영업합니다. 가장 인기 있는 시간대는 저녁 8시부터 자정까지이며, 이 시간대에는 예약이 집중되므로 사전 연락을 주시는 것을 권장합니다. 평일과 주말 모두 동일한 시간에 운영되며, 명절 등 특수 기간에는 별도 공지를 통해 안내해 드립니다.',
  },
  {
    question: '예약 없이 방문해도 되나요?',
    answer:
      '예약 없이 방문도 가능하지만, 주말이나 금요일 저녁 시간대에는 빈 룸이 없을 수 있습니다. 원활한 이용을 위해 최소 당일 오전까지는 예약 문의를 주시는 것이 좋습니다. 전화 한 통이면 빠르게 예약이 완료되며, 원하시는 룸 타입과 인원에 맞춰 최적의 공간을 준비해 드립니다.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="강서 노래방 | 강서구 프리미엄 룸 노래방 가격·시스템·후기 안내"
        description="강서 노래방 공식 안내 페이지입니다. 강서구 프리미엄 룸 노래방의 투명한 가격표, 초이스 시스템, 실제 이용 후기를 확인하세요. 처음 방문하시는 분도 부담 없이 이용하실 수 있도록 모든 정보를 솔직하게 안내합니다. 강서 노래방 가격, 강서 노래방 시스템이 궁금하시다면 지금 확인하세요."
        canonical="https://gangseojanghon.com/"
        keywords="강서 노래방, 강서구 노래방, 강서 노래방 가격, 강서 노래방 시스템, 강서 노래방 후기, 강서 룸노래방, 강서 가라오케, 강서구 룸"
      />
      <WebPageSchema
        name="강서 노래방 - 강서구 프리미엄 룸 노래방 안내"
        description="강서구 프리미엄 룸 노래방의 가격, 시스템, 후기를 투명하게 안내하는 공식 페이지입니다."
        url="/"
      />

      {/* ──── Hero Section ──── */}
      <section className="hero">
        <div className="hero__bg bg-gradient-animate" />
        <div className="hero__image">
          <img
            src="/images/hero.jpg"
            alt="강서 노래방 프리미엄 룸 내부 전경 - 강서구 프리미엄 노래방"
            width={1920}
            height={1080}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,13,26,0.5) 0%, rgba(13,13,26,0.7) 100%)' }} />
        </div>

        <div className="hero__content">
          <AnimatedSection animation="fade-in-up">
            <span className="hero__badge">강서구 프리미엄 노래방</span>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <h1 className="hero__title">
              <span className="highlight">강서 노래방</span>, 처음이라면
              <br />
              여기서 모든 궁금증을 해결하세요
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <p className="hero__desc">
              가격은 얼마인지, 시스템은 어떻게 돌아가는지, 내상은 없는지.
              처음 방문하시는 분들이 가장 궁금해하는 정보를 솔직하게 정리했습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={600}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/price" className="cta-btn cta-glow">
                가격 확인하기
              </Link>
              <Link to="/system" className="cta-btn cta-btn--outline">
                시스템 안내
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 강서 노래방 소개 섹션 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>강서 노래방이란?</h2>
              <p>
                강서구 지역에서 운영되는 프리미엄 룸 노래방으로,
                비즈니스 접대와 모임을 위한 고급 접객 서비스를 제공합니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            <AnimatedSection animation="fade-in-left">
              <div>
                <h3>솔직한 안내, 투명한 운영</h3>
                <p>
                  유흥 노래방을 처음 이용하려는 분들이 가장 먼저 느끼는 감정은 '불안'입니다.
                  가격이 뻥튀기되는 건 아닌지, 원치 않는 추가 비용이 발생하는 건 아닌지,
                  소위 '내상'을 당하는 건 아닌지 걱정이 앞서는 것은 자연스러운 일입니다.
                </p>
                <p>
                  강서 노래방은 이런 불안을 해소하기 위해 존재합니다.
                  방문 전 전화 상담을 통해 예상 비용을 정확하게 안내해 드리고,
                  현장에서 추가 요금이 발생하는 항목은 사전에 모두 공지합니다.
                  최종 결제 금액에서 '이게 뭐지?' 하는 항목이 없도록
                  가격 구조를 투명하게 운영하는 것이 저희의 기본 원칙입니다.
                </p>
                <p>
                  또한 강서 노래방은 강서구 내에서도 접근성이 좋은 위치에 자리하고 있어,
                  강서구뿐 아니라 마곡, 발산, 등촌, 화곡 등 인근 지역에서도
                  편리하게 방문하실 수 있습니다. 주차 공간도 마련되어 있어
                  자가용으로 오시는 분들도 불편함 없이 이용 가능합니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="img-section">
                <img
                  src="/images/room-1.jpg"
                  alt="강서 노래방 프리미엄 룸 인테리어 - 고급 노래방 내부"
                  loading="lazy"
                  width={800}
                  height={450}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('img-placeholder');
                      e.currentTarget.parentElement.textContent = '강서 노래방 프리미엄 룸';
                    }
                  }}
                />
                <div className="img-section__overlay">
                  <p>프리미엄 룸 인테리어</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in-up">
            <div className="info-box">
              <p>
                <strong style={{ color: '#c9a84c' }}>안내:</strong> 강서 노래방은
                20세 미만 출입이 불가한 성인 전용 유흥업소입니다.
                신분증 지참은 필수이며, 주류 서비스가 포함된 공간입니다.
                건전한 이용 문화를 위해 기본적인 에티켓을 지켜주시기 바랍니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 왜 강서 노래방인가 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>강서 노래방을 선택하는 이유</h2>
              <p>
                단순히 '좋다'가 아닌, 실질적으로 차이나는 부분들을 정리했습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" className="grid-3">
            <div className="card">
              <div className="card__icon">
                <span role="img" aria-label="가격">&#8361;</span>
              </div>
              <h3 className="card__title">투명한 가격 구조</h3>
              <p className="card__text">
                강서 노래방의 모든 가격은 사전에 공개됩니다.
                룸비, 주류, 서비스 비용을 포함한 총 예상 금액을
                방문 전에 안내받으실 수 있습니다.
                현장에서 말도 안 되는 금액이 청구되는 일은 절대 없습니다.
                예산에 맞춰 코스를 추천해 드리는 것도 가능하며,
                추가 비용이 발생하는 상황에서는 반드시 사전 동의를 구합니다.
              </p>
            </div>

            <div className="card">
              <div className="card__icon">
                <span role="img" aria-label="시스템">&#9881;</span>
              </div>
              <h3 className="card__title">검증된 운영 시스템</h3>
              <p className="card__text">
                강서 노래방은 오랜 운영 경험을 바탕으로
                체계적인 시스템을 갖추고 있습니다.
                입장부터 퇴장까지 모든 과정이 정해진 절차에 따라 진행되며,
                초이스 과정에서도 손님의 의사를 최대한 존중합니다.
                마음에 들지 않으면 교체가 가능하고,
                강요나 불쾌한 경험이 없도록 관리합니다.
              </p>
            </div>

            <div className="card">
              <div className="card__icon">
                <span role="img" aria-label="공간">&#9733;</span>
              </div>
              <h3 className="card__title">쾌적한 룸 환경</h3>
              <p className="card__text">
                강서 노래방의 룸은 정기적으로 리모델링과 청소가 이루어집니다.
                음향 장비는 최신 시스템을 유지하고 있으며,
                조명과 인테리어도 고급스러운 분위기를 연출합니다.
                소규모 모임부터 단체 이용까지 룸 사이즈를 다양하게 보유하고 있어
                인원에 맞는 공간 배정이 가능합니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <div style={{ marginTop: '3rem' }}>
              <div className="grid-2">
                <div className="card">
                  <h3 className="card__title">접근성과 편의시설</h3>
                  <p className="card__text">
                    강서구 주요 도로변에 위치하여 택시나 자가용으로 쉽게 접근 가능합니다.
                    건물 내 주차장이 완비되어 있고, 지하철역에서도 도보 이동이 가능한 거리입니다.
                    대리운전 연계 서비스도 제공하고 있어 음주 후 귀가도 편리하게 해결할 수 있습니다.
                    1층에는 편의점이 인접해 있어 필요한 물품을 바로 구입하실 수 있습니다.
                  </p>
                </div>
                <div className="card">
                  <h3 className="card__title">프라이버시 보장</h3>
                  <p className="card__text">
                    강서 노래방은 손님의 프라이버시를 최우선으로 생각합니다.
                    각 룸은 완벽한 방음 처리가 되어 있으며,
                    입퇴장 동선이 분리되어 다른 손님과 마주칠 일이 최소화됩니다.
                    비즈니스 목적으로 방문하시는 분들이 안심하고 이용할 수 있도록
                    철저한 보안과 동선 관리를 실시하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 이용 흐름 미리보기 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>이용 흐름 한눈에 보기</h2>
              <p>강서 노래방 방문이 처음이라면, 아래 흐름을 참고하세요.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" className="grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card__icon" style={{ margin: '0 auto 1rem', background: 'rgba(201,168,76,0.15)', fontSize: '1.3rem' }}>
                01
              </div>
              <h4 className="card__title">전화 상담</h4>
              <p className="card__text">
                이용 전 전화로 가격, 시스템, 예약 여부를 확인합니다.
                예산과 인원을 말씀해 주시면 맞춤 안내를 드립니다.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card__icon" style={{ margin: '0 auto 1rem', background: 'rgba(201,168,76,0.15)', fontSize: '1.3rem' }}>
                02
              </div>
              <h4 className="card__title">방문 및 입장</h4>
              <p className="card__text">
                매장에 도착하시면 담당자가 안내합니다.
                룸 배정 후 주류와 안주 메뉴를 선택하시면 됩니다.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card__icon" style={{ margin: '0 auto 1rem', background: 'rgba(201,168,76,0.15)', fontSize: '1.3rem' }}>
                03
              </div>
              <h4 className="card__title">초이스 진행</h4>
              <p className="card__text">
                함께할 매니저를 직접 선택합니다.
                마음에 들지 않으면 교체가 가능하며, 강요는 없습니다.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card__icon" style={{ margin: '0 auto 1rem', background: 'rgba(201,168,76,0.15)', fontSize: '1.3rem' }}>
                04
              </div>
              <h4 className="card__title">이용 및 정산</h4>
              <p className="card__text">
                편안하게 시간을 보내신 후, 사전 안내된 금액으로 정산합니다.
                추가 요금이 있다면 반드시 사전 고지됩니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 강서 노래방 이용 안내 상세 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>강서 노래방 상세 안내</h2>
              <p>아래 내용을 통해 이용 전 궁금증을 미리 해결하세요.</p>
            </div>
          </AnimatedSection>

          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <AnimatedSection animation="fade-in-left">
              <div>
                <h3>어떤 분들이 이용하시나요?</h3>
                <p>
                  강서 노래방을 이용하시는 분들의 목적은 다양합니다.
                  가장 많은 비율을 차지하는 것은 비즈니스 접대입니다.
                  거래처 사장님이나 중요한 파트너와의 자리에서
                  격식 있으면서도 편안한 분위기를 제공하기 위해 많이 찾으십니다.
                </p>
                <p>
                  그 다음으로 많은 것은 회식이나 개인 모임입니다.
                  일반 술집이나 식당과는 다른 프라이빗한 공간에서
                  친한 지인들과 특별한 시간을 보내고 싶은 분들이 찾으십니다.
                  생일 파티나 승진 축하 등 기념일에 방문하시는 경우도 적지 않습니다.
                </p>
                <p>
                  혼자 방문하시는 분들도 계십니다. 업무 스트레스를 풀고 싶거나,
                  조용히 한잔하며 대화 상대가 필요한 분들이 종종 오시는데,
                  1인 이용도 편안하게 가능하도록 소형 룸을 별도로 운영하고 있습니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div>
                <h3>내상 걱정, 솔직하게 말씀드립니다</h3>
                <p>
                  '내상'이란 기대와 다른 경험으로 인한 실망감을 뜻하는 업계 용어입니다.
                  주로 과도한 비용 청구, 서비스 불만족, 강압적인 분위기 등이 원인입니다.
                </p>
                <p>
                  강서 노래방에서는 이런 상황이 발생하지 않도록 여러 장치를 마련해 두었습니다.
                  첫째, 가격은 사전에 모두 공개하며, 현장에서 추가되는 비용은
                  반드시 손님의 동의를 받은 후에만 진행합니다.
                  둘째, 초이스 과정에서 마음에 들지 않으면 언제든 교체가 가능합니다.
                  셋째, 이용 중 불편한 점이 있으면 담당자를 통해 바로 해결할 수 있습니다.
                </p>
                <p>
                  물론 모든 서비스업이 그렇듯 개인의 기대치에 따라 만족도는 다를 수 있습니다.
                  하지만 기본적인 시스템과 서비스 품질을 유지하기 위해
                  지속적으로 관리하고 있다는 점은 분명히 말씀드릴 수 있습니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──── CTA Section ──── */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <h2>강서 노래방, 더 궁금한 점이 있으신가요?</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>
              전화 한 통이면 가격부터 시스템까지 모든 궁금증을 해결해 드립니다.
              부담 없이 문의해 주세요.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/price" className="cta-btn cta-glow">
                가격 안내 보기
              </Link>
              <Link to="/review" className="cta-btn cta-btn--outline">
                이용 후기 확인
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── FAQ Section ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>자주 묻는 질문</h2>
              <p>강서 노래방에 대해 가장 많이 문의하시는 내용을 정리했습니다.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FAQ faqs={HOME_FAQS} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
