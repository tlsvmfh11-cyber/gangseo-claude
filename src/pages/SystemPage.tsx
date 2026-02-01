import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { WebPageSchema } from '../components/SchemaMarkup';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';

const SYSTEM_FAQS = [
  {
    question: '초이스는 어떻게 진행되나요?',
    answer:
      '강서 노래방의 초이스는 매니저들이 직접 룸에 인사를 드리는 방식으로 진행됩니다. 여러 매니저가 순서대로 인사를 드리면, 그중에서 마음에 드시는 분을 선택하시면 됩니다. 선택 후에도 대화를 나눠보시고 분위기가 맞지 않는다고 느끼시면 교체를 요청하실 수 있습니다. 교체 시 추가 비용은 없으며, 손님의 만족이 최우선입니다.',
  },
  {
    question: '초이스에서 마음에 드는 매니저가 없으면 어떻게 하나요?',
    answer:
      '충분히 있을 수 있는 상황입니다. 첫 번째 초이스에서 마음에 드는 분이 없으시면, 다른 매니저를 추가로 소개해 드립니다. 그래도 선택이 어려우시면 담당자와 상의해 주세요. 당일 근무 중인 매니저 중에서 최대한 손님의 취향에 맞는 분을 매칭해 드리겠습니다. 매칭이 어려운 경우 이용을 중단하실 수도 있습니다.',
  },
  {
    question: '시간 연장은 어떻게 되나요?',
    answer:
      '기본 이용 시간은 2시간이며, 연장은 30분 단위로 가능합니다. 기본 시간이 끝나기 약 15분 전에 담당자가 연장 여부를 확인합니다. 연장을 원하시면 추가 비용을 안내받으신 후 진행하시면 되고, 연장을 원치 않으시면 편하게 말씀해 주시면 됩니다. 연장 강요는 절대 없습니다.',
  },
  {
    question: '2차는 가능한가요?',
    answer:
      '강서 노래방 자체에서 2차 서비스를 직접 운영하지는 않습니다. 다만, 인근 지역의 2차 장소에 대한 안내는 가능합니다. 필요하신 경우 담당자에게 문의해 주시면 연계된 업소를 소개해 드릴 수 있습니다. 2차 관련 비용은 강서 노래방과 별도이며, 저희 이용료와는 무관합니다.',
  },
  {
    question: '혼자 가도 되나요?',
    answer:
      '네, 1인 이용도 환영합니다. 혼자 오시는 분들을 위한 소형 룸이 별도로 준비되어 있으며, 1인 이용에 맞춘 가격 코스도 마련되어 있습니다. 혼자 방문하시는 분들이 생각보다 많기 때문에 전혀 어색하지 않으시도록 자연스럽게 안내해 드립니다. 편하게 연락 주세요.',
  },
];

export default function SystemPage() {
  return (
    <>
      <SEOHead
        title="강서 노래방 시스템 | 초이스·입장·이용 방법 완벽 안내"
        description="강서 노래방 시스템을 상세히 안내합니다. 예약부터 입장, 초이스 진행, 매니저 서비스, 시간 연장, 정산까지 모든 이용 절차를 순서대로 설명합니다. 처음 방문하시는 분도 이 페이지를 읽으시면 전체 흐름을 파악하실 수 있습니다. 강서 노래방 시스템이 궁금하셨다면 지금 확인하세요."
        canonical="https://gangseojanghon.com/system"
        keywords="강서 노래방 시스템, 강서 노래방 초이스, 강서 노래방 이용방법, 강서 노래방 예약, 강서구 노래방 시스템, 노래방 초이스 방법"
      />
      <WebPageSchema
        name="강서 노래방 이용 시스템 안내"
        description="예약부터 초이스, 이용, 정산까지 강서 노래방의 전체 이용 절차를 안내합니다."
        url="/system"
      />

      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '이용 시스템', href: '/system' },
        ]}
      />

      {/* ──── System Hero ──── */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h1>
                <span className="keyword-glow">강서 노래방 시스템</span> 완벽 안내
              </h1>
              <p>
                예약부터 정산까지, 강서 노래방 이용의 모든 과정을 상세하게 안내해 드립니다.
                처음 방문하시는 분도 이 페이지만 읽으시면 충분합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 시스템 개요 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <h2>강서 노래방 시스템 개요</h2>
            <p>
              강서 노래방의 이용 시스템은 처음 방문하시는 분들도 당황하지 않도록
              체계적으로 설계되어 있습니다. 유흥 노래방 특성상 '어떻게 진행되는지'가
              가장 궁금하실 텐데, 이 페이지에서 모든 절차를 순서대로 설명해 드리겠습니다.
            </p>
            <p>
              전체 이용 흐름은 크게 다섯 단계로 나뉩니다.
              사전 상담 및 예약, 방문 및 입장, 초이스(매니저 선택), 이용, 정산 순서입니다.
              각 단계에서 손님이 알아야 할 사항과 주의점을 아래에 정리했습니다.
            </p>
            <p>
              강서 노래방의 시스템은 손님의 편안함과 만족을 최우선으로 합니다.
              어떤 단계에서든 불편한 점이 있으시면 담당자에게 말씀해 주시면
              즉시 대응해 드립니다. 억지로 무언가를 강요하는 문화는
              저희 매장에서는 존재하지 않습니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── STEP 1: 예약 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>STEP 1. 사전 상담 및 예약</h2>
            </div>
          </AnimatedSection>

          <div className="grid-2">
            <AnimatedSection animation="fade-in-left">
              <div>
                <h3>전화 상담의 중요성</h3>
                <p>
                  강서 노래방 이용의 첫 단계는 전화 상담입니다.
                  이 과정이 중요한 이유는 방문 전에 가격, 이용 가능 여부,
                  룸 배정, 예산별 코스 등을 모두 확인할 수 있기 때문입니다.
                </p>
                <p>
                  전화 상담 시 확인하실 사항은 다음과 같습니다.
                  방문 인원, 원하시는 룸 타입, 예산 범위, 주류 선호도,
                  특별 요청 사항(생일 등) 등을 말씀해 주시면
                  그에 맞춰 최적의 이용 플랜을 안내해 드립니다.
                </p>
                <p>
                  상담은 짧게는 2~3분이면 충분하며,
                  복잡한 질문이 있으셔도 친절하게 답변해 드립니다.
                  상담 후 바로 예약을 진행하실 수도 있고,
                  생각해 보신 후 나중에 예약하셔도 전혀 무방합니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="card">
                <h4 className="card__title">상담 시 확인 체크리스트</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    '방문 인원 (정확한 인원수)',
                    '희망 방문 시간대',
                    '예산 범위 (대략적으로)',
                    '룸 타입 선호도',
                    '주류 취향 (양주/와인/맥주)',
                    '특별 요청 사항 (기념일 등)',
                    '주차 필요 여부',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: '0.6rem 0',
                        borderBottom: '1px solid rgba(201,168,76,0.1)',
                        color: '#b8b5ad',
                        fontSize: '0.95rem',
                      }}
                    >
                      &#10003; {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──── STEP 2: 입장 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>STEP 2. 방문 및 입장</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <h3>도착 후 진행 과정</h3>
            <p>
              매장에 도착하시면 입구에서 담당자가 안내를 시작합니다.
              예약하신 분의 경우 이름(또는 전화번호)을 확인한 후
              바로 지정된 룸으로 안내해 드립니다.
              예약 없이 방문하신 경우에도 빈 룸이 있다면 즉시 이용 가능합니다.
            </p>
            <p>
              룸에 입장하시면 먼저 음료(물, 탄산음료)가 제공되며,
              주류 메뉴와 안주 메뉴를 확인하신 후 주문해 주시면 됩니다.
              주류 선택에 어려움이 있으시면 담당자가 예산과 취향에 맞게 추천해 드립니다.
            </p>
            <p>
              입장 시 신분증 확인은 필수입니다. 만 19세 미만은 입장이 불가하며,
              이는 법적 규정에 따른 것이므로 양해 부탁드립니다.
              신분증은 확인 후 즉시 돌려드리며, 별도로 보관하지 않습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="info-box" style={{ marginTop: '2rem' }}>
              <p>
                <strong style={{ color: '#c9a84c' }}>Tip:</strong> 강서 노래방에 처음 방문하신다면,
                담당자에게 &quot;처음입니다&quot;라고 편하게 말씀해 주세요.
                전체 진행 과정을 더 상세하게 안내해 드리며,
                모르시는 부분은 언제든 질문하실 수 있습니다.
                처음이라고 해서 추가 비용이 발생하거나 불이익이 있는 것은 아닙니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── STEP 3: 초이스 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>STEP 3. 초이스 (매니저 선택)</h2>
              <p>강서 노래방 시스템에서 가장 핵심적인 과정입니다.</p>
            </div>
          </AnimatedSection>

          <div className="grid-2">
            <AnimatedSection animation="fade-in-left">
              <div>
                <h3>초이스란 무엇인가</h3>
                <p>
                  초이스는 함께 시간을 보내실 매니저를 직접 선택하는 과정입니다.
                  주류가 준비되면 여러 명의 매니저가 순서대로 룸에 들어와 인사를 드립니다.
                  각 매니저가 간단한 자기소개를 하면,
                  그중에서 마음에 드시는 분을 선택하시면 됩니다.
                </p>
                <p>
                  초이스 과정에서 가장 중요한 것은 손님의 의사입니다.
                  강서 노래방에서는 손님이 원하지 않는 매니저를 강제로 배정하지 않습니다.
                  첫 인상뿐 아니라 대화를 나눠보시고 판단하셔도 되며,
                  선택 후에도 분위기가 맞지 않으면 교체를 요청하실 수 있습니다.
                </p>
                <p>
                  교체 시 추가 비용은 발생하지 않습니다.
                  이는 강서 노래방의 확고한 원칙이며,
                  손님의 만족을 위한 기본적인 서비스입니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="img-section">
                <img
                  src="/images/system.jpg"
                  alt="강서 노래방 초이스 시스템 안내 - 매니저 선택 과정"
                  loading="lazy"
                  width={800}
                  height={450}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('img-placeholder');
                      e.currentTarget.parentElement.textContent = '강서 노래방 이용 시스템';
                    }
                  }}
                />
                <div className="img-section__overlay">
                  <p>체계적인 이용 시스템</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div style={{ marginTop: '3rem' }}>
              <h3>초이스 시 참고사항</h3>
              <p>
                매니저의 외모뿐 아니라 대화 스타일, 분위기도 중요한 선택 기준입니다.
                비즈니스 접대 자리라면 차분하고 격식 있는 매니저가 적합할 수 있고,
                친구들과의 가벼운 모임이라면 밝고 활발한 매니저가 더 어울릴 수 있습니다.
                원하시는 분위기를 담당자에게 미리 말씀해 주시면
                그에 맞는 매니저를 우선적으로 소개해 드립니다.
              </p>
              <p>
                초이스 인원은 보통 3~5명 정도이며,
                당일 근무 상황에 따라 다소 차이가 있을 수 있습니다.
                주말 저녁 시간대에는 매니저 수가 가장 많아
                선택의 폭이 넓은 편입니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── STEP 4: 이용 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>STEP 4. 이용</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <h3>이용 중 알아두실 사항</h3>
            <p>
              매니저 선택이 완료되면 본격적으로 이용이 시작됩니다.
              노래를 부르시면서 매니저와 함께 편안한 시간을 보내시면 됩니다.
              음향 장비는 최신 시스템으로 유지하고 있으며,
              신곡 업데이트도 정기적으로 이루어집니다.
            </p>
            <p>
              기본 이용 시간은 2시간이며, 시간이 다가오면 담당자가 연장 여부를 확인합니다.
              연장을 원하시면 30분 단위로 추가 이용이 가능하고,
              종료를 원하시면 편하게 말씀해 주시면 됩니다.
              연장 강요나 불쾌한 눈치 주기는 절대 없습니다.
            </p>
            <p>
              이용 중 추가 주류나 안주를 주문하실 수 있으며,
              매니저 교체를 원하시는 경우에도 자유롭게 요청 가능합니다.
              이용 도중 불편한 점이 있으시면 룸 내 호출 버튼을 누르시거나
              담당자에게 직접 말씀해 주시면 즉시 조치해 드립니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="grid-3" style={{ marginTop: '2rem' }}>
              <div className="card">
                <h4 className="card__title">음향 시스템</h4>
                <p className="card__text">
                  최신 노래방 기기와 고급 음향 장비를 갖추고 있습니다.
                  마이크 음질과 스피커 성능에 신경 쓰고 있으며,
                  정기적인 장비 점검을 통해 항상 최상의 상태를 유지합니다.
                  노래 반주 시스템은 TJ와 금영 모두 사용 가능합니다.
                </p>
              </div>
              <div className="card">
                <h4 className="card__title">조명 및 분위기</h4>
                <p className="card__text">
                  각 룸의 조명은 밝기와 색상을 자유롭게 조절할 수 있습니다.
                  차분한 분위기부터 화려한 분위기까지
                  원하시는 무드에 맞게 세팅이 가능합니다.
                  리모컨으로 간편하게 조작하실 수 있습니다.
                </p>
              </div>
              <div className="card">
                <h4 className="card__title">편의시설</h4>
                <p className="card__text">
                  각 룸에는 에어컨, 개별 화장실(VIP 이상), 충전 케이블,
                  와이파이가 기본 제공됩니다. 흡연은 지정 흡연실에서만 가능하며,
                  룸 내 흡연은 불가합니다. 대리운전 호출도 프론트에서 도와드립니다.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── STEP 5: 정산 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>STEP 5. 정산 및 퇴장</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <h3>정산 과정 안내</h3>
            <p>
              이용이 종료되면 담당자가 최종 이용 내역을 정리하여 안내해 드립니다.
              내역에는 룸 이용료, 주류 비용, 서비스 비용, 연장 비용(해당 시) 등이
              항목별로 명시되어 있어 한눈에 확인하실 수 있습니다.
            </p>
            <p>
              결제는 현금, 신용카드, 체크카드 모두 가능합니다.
              법인카드 결제도 정상 처리되며, 세금계산서 발급이 필요하신 경우
              사전에 말씀해 주시면 처리해 드립니다.
              정산 금액은 사전에 안내된 예상 금액과 동일하며,
              만약 차이가 있다면 상세하게 설명해 드립니다.
            </p>
            <p>
              퇴장 시 대리운전이 필요하신 분들은 프론트에 요청해 주시면
              바로 호출해 드립니다. 택시 호출도 도와드리며,
              귀가에 불편함이 없도록 끝까지 안내해 드립니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <h2>강서 노래방 시스템, 이제 이해되셨나요?</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>
              더 궁금한 점이 있으시면 전화로 편하게 문의해 주세요.
              실제 이용하신 분들의 생생한 후기도 확인해 보세요.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/review" className="cta-btn cta-glow">
                이용 후기 확인
              </Link>
              <Link to="/price" className="cta-btn cta-btn--outline">
                가격 안내 보기
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>시스템 관련 자주 묻는 질문</h2>
              <p>강서 노래방 시스템에 대해 많이 문의하시는 내용입니다.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FAQ faqs={SYSTEM_FAQS} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
