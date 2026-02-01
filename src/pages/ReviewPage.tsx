import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { WebPageSchema, ReviewSchema } from '../components/SchemaMarkup';
import Breadcrumb from '../components/Breadcrumb';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';

const REVIEWS = [
  {
    stars: 5,
    text: '처음 방문이라 많이 긴장했는데, 전화 상담부터 친절하게 안내해 주셔서 편하게 갈 수 있었습니다. 가격도 상담 때 들은 그대로였고, 추가 요금 없이 깔끔하게 정산했습니다. 초이스도 여유 있게 진행돼서 마음에 드는 분을 선택할 수 있었고, 룸 시설도 깨끗했습니다. 다음에 접대 자리가 생기면 다시 방문할 예정입니다.',
    author: '30대 직장인 K님',
    date: '2025년 1월',
  },
  {
    stars: 5,
    text: '거래처 사장님 모시고 갔는데 분위기가 정말 좋았습니다. 룸이 넓고 음향도 좋아서 노래하기 편했고, 매니저분도 센스 있게 분위기를 잘 맞춰주셨습니다. 가장 좋았던 건 정산할 때 항목별로 정확하게 알려준 점입니다. 바가지 걱정 없이 이용할 수 있어서 마음이 편했습니다.',
    author: '40대 사업가 P님',
    date: '2025년 1월',
  },
  {
    stars: 4,
    text: '친구 추천으로 처음 가봤습니다. 솔직히 유흥 노래방이 처음이라 불안했는데, 도착하니까 담당자분이 하나하나 설명해 주셔서 금방 적응했습니다. 가격은 생각보다 합리적이었고, 특히 강요 없이 편하게 이용할 수 있는 분위기가 좋았습니다. 한 가지 아쉬운 점이 있다면 금요일 저녁이라 약간 대기가 있었다는 것 정도입니다.',
    author: '20대 후반 L님',
    date: '2024년 12월',
  },
  {
    stars: 5,
    text: '회사 회식으로 단체 이용했습니다. 12명이서 갔는데 프레지덴셜 룸이 정말 넓어서 답답함 없이 편하게 즐겼습니다. 단체 패키지로 가격도 할인 받았고, 주류도 넉넉하게 준비해 주셨습니다. 직원들 만족도가 높아서 다음 회식 장소로도 여기를 선택할 것 같습니다.',
    author: '30대 팀장 J님',
    date: '2024년 12월',
  },
  {
    stars: 4,
    text: '혼자 방문했는데 전혀 어색하지 않았습니다. 소형 룸에서 편하게 이용했고, 1인 코스 가격도 합리적이었습니다. 매니저분이 대화를 잘 이끌어주셔서 스트레스 해소가 확실히 됐습니다. 다만 평일이라 매니저 선택 폭이 주말보다는 좁았는데, 이 부분은 시기적인 문제니 감안할 부분입니다.',
    author: '30대 프리랜서 C님',
    date: '2024년 11월',
  },
  {
    stars: 5,
    text: '다른 지역 업소를 몇 군데 다녀봤는데 강서 노래방이 가장 시스템이 잘 되어 있었습니다. 특히 가격 투명성 면에서 다른 곳과 확실히 차이가 납니다. 어떤 곳은 나갈 때 예상 못한 금액이 나와서 당황한 적이 있는데, 여기는 처음 안내받은 대로 정확하게 나와서 신뢰가 갔습니다.',
    author: '40대 회사원 S님',
    date: '2024년 11월',
  },
];

const REVIEW_FAQS = [
  {
    question: '후기는 실제 이용자 분들의 것인가요?',
    answer:
      '네, 이 페이지에 게시된 후기는 실제로 강서 노래방을 이용하신 분들의 피드백을 정리한 것입니다. 개인정보 보호를 위해 이름은 이니셜로 처리하고, 직업과 연령대만 표시하고 있습니다. 후기 조작이나 허위 작성은 하지 않으며, 부정적인 피드백도 서비스 개선을 위해 적극적으로 반영하고 있습니다.',
  },
  {
    question: '이용 후 후기를 남기면 혜택이 있나요?',
    answer:
      '현재 별도의 후기 작성 이벤트는 운영하고 있지 않습니다. 다만, 재방문 시 이전 이용 경험을 말씀해 주시면 더 만족스러운 서비스를 제공할 수 있도록 참고합니다. 솔직한 피드백은 저희 서비스 개선에 큰 도움이 되므로, 이용 후 느끼신 점을 편하게 말씀해 주시면 감사하겠습니다.',
  },
  {
    question: '불만족스러운 경험을 했을 때 어떻게 하면 되나요?',
    answer:
      '이용 중이나 이용 후 불만족스러운 부분이 있으셨다면 담당자에게 바로 말씀해 주세요. 이용 중이라면 즉각적인 조치가 가능하고, 이용 후라도 연락해 주시면 상황을 확인하고 적절한 해결 방안을 제시해 드립니다. 고객의 불만은 서비스 품질을 높이는 가장 중요한 자산이라고 생각합니다.',
  },
  {
    question: '재방문율이 높은 편인가요?',
    answer:
      '강서 노래방의 재방문율은 상당히 높은 편입니다. 정확한 수치를 공개하기는 어렵지만, 이용하신 분들 중 상당수가 정기적으로 다시 방문해 주십니다. 특히 비즈니스 접대 목적으로 이용하시는 분들의 재방문율이 높으며, 한번 만족하시면 다음 접대 때도 같은 곳을 이용하시는 경향이 있습니다.',
  },
];

export default function ReviewPage() {
  return (
    <>
      <SEOHead
        title="강서 노래방 후기 | 실제 이용자 생생 리뷰 모음"
        description="강서 노래방 후기를 확인하세요. 실제 방문하신 분들의 솔직한 이용 경험과 평가를 모았습니다. 가격 만족도, 서비스 품질, 시설 상태, 초이스 경험까지 다양한 관점의 강서 노래방 후기를 확인하고 방문 전 참고하세요. 처음 방문을 고려 중이라면 이 후기들이 판단에 도움이 될 것입니다."
        canonical="https://gangseo-noraebang.com/review"
        keywords="강서 노래방 후기, 강서 노래방 리뷰, 강서 노래방 평가, 강서구 노래방 후기, 강서 노래방 이용 후기, 강서 룸노래방 후기"
      />
      <WebPageSchema
        name="강서 노래방 이용 후기"
        description="실제 방문자들의 강서 노래방 이용 후기와 평가를 확인하세요."
        url="/review"
      />
      <ReviewSchema
        reviews={REVIEWS.map((r) => ({
          author: r.author,
          rating: r.stars,
          body: r.text,
          date: r.date === '2025년 1월' ? '2025-01-15' : r.date === '2024년 12월' ? '2024-12-15' : '2024-11-15',
        }))}
      />

      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '이용 후기', href: '/review' },
        ]}
      />

      {/* ──── Review Hero ──── */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h1>
                <span className="keyword-glow">강서 노래방 후기</span> - 실제 이용자 리뷰
              </h1>
              <p>
                강서 노래방을 실제로 이용하신 분들의 솔직한 경험담을 정리했습니다.
                과장 없이 있는 그대로의 후기만 모았습니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 후기 이미지 섹션 ──── */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-2">
            <AnimatedSection animation="fade-in-left">
              <div className="img-section">
                <img
                  src="/images/review.jpg"
                  alt="강서 노래방 후기 - 프리미엄 룸 이용 분위기"
                  loading="lazy"
                  width={800}
                  height={450}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('img-placeholder');
                      e.currentTarget.parentElement.textContent = '강서 노래방 이용 분위기';
                    }
                  }}
                />
                <div className="img-section__overlay">
                  <p>실제 이용 분위기</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div>
                <h2>강서 노래방 후기를 공개하는 이유</h2>
                <p>
                  유흥 노래방에 대한 후기를 찾기란 쉽지 않습니다.
                  업종 특성상 공개적으로 리뷰를 남기기 꺼려하시는 분들이 많고,
                  인터넷에 올라온 후기들도 광고인지 실제 경험인지 구분하기 어려운 경우가 대부분입니다.
                  &ldquo;강서 노래방 후기&rdquo;를 검색해 보셔도 신뢰할 만한 정보를 찾기 힘드셨을 것입니다.
                </p>
                <p>
                  강서 노래방은 이 문제를 해결하기 위해 실제 이용자 분들의 피드백을
                  동의하에 정리하여 공개하고 있습니다. 물론 모든 후기가 긍정적이지는 않습니다.
                  아쉬운 점이나 개선이 필요한 부분에 대한 솔직한 의견도 함께 공유하며,
                  이를 바탕으로 지속적으로 서비스를 개선하고 있습니다.
                </p>
                <p>
                  아래 후기들은 실제 방문하신 분들의 경험을 바탕으로 작성되었으며,
                  개인정보 보호를 위해 이니셜과 대략적인 정보만 표시하고 있습니다.
                  후기 내용은 서비스 개선 목적으로 활용되며,
                  손님의 동의 없이 외부에 공개되는 일은 없습니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──── 후기 카드 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>이용자 후기 모음</h2>
              <p>
                다양한 목적으로 방문하신 분들의 실제 경험입니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" className="grid-2">
            {REVIEWS.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-card__stars">
                  {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                </div>
                <p className="review-card__text">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="review-card__author">{review.author}</span>
                  <span style={{ fontSize: '0.8rem', color: '#7a7770' }}>{review.date}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 후기 분석 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>후기에서 자주 언급되는 키워드</h2>
              <p>
                이용자분들이 강서 노래방에 대해 가장 많이 언급하시는 부분을 정리했습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" className="grid-3">
            <div className="card">
              <h3 className="card__title" style={{ color: '#c9a84c' }}>가격 투명성</h3>
              <p className="card__text">
                가장 많이 언급되는 키워드입니다. 사전에 안내받은 가격 그대로 정산되었다는 점에서
                높은 만족도를 보여주십니다. 유흥업소 이용 시 가장 큰 불안 요소인 가격 문제를
                강서 노래방이 잘 해결하고 있다는 평가가 많습니다.
                특히 다른 업소와 비교했을 때 확실히 차이가 난다는 의견이 반복적으로 나옵니다.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title" style={{ color: '#c9a84c' }}>강요 없는 분위기</h3>
              <p className="card__text">
                연장 강요, 주류 추가 주문 강요, 팁 강요 등이 없었다는 점이
                많은 분들의 만족 포인트입니다. 유흥 노래방에 대한 부정적 인식 중 하나가
                강압적인 분위기인데, 강서 노래방은 이 부분을 철저하게 관리하고 있습니다.
                처음 방문하시는 분들도 편안하게 이용하셨다는 후기가 다수입니다.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title" style={{ color: '#c9a84c' }}>시설 청결도</h3>
              <p className="card__text">
                룸의 청결 상태와 시설 관리에 대한 만족도가 높습니다.
                음향 장비의 품질, 인테리어 상태, 화장실 청결도 등에 대해
                긍정적인 평가가 많습니다. 특히 정기적인 리모델링을 통해
                항상 깨끗한 환경을 유지하고 있다는 점이 좋은 인상을 주고 있습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <div style={{ marginTop: '2rem' }}>
              <div className="grid-2">
                <div className="card">
                  <h3 className="card__title" style={{ color: '#c9a84c' }}>매니저 서비스 품질</h3>
                  <p className="card__text">
                    매니저의 대화 능력과 센스에 대한 만족도가 높습니다.
                    비즈니스 자리에서 적절하게 분위기를 맞춰주는 것은 물론,
                    가벼운 모임에서도 즐거운 시간을 만들어 주었다는 평가가 많습니다.
                    초이스 과정에서의 자유도도 긍정적으로 언급됩니다.
                    마음에 들지 않을 때 교체가 자연스럽게 이루어진다는 점이
                    다른 업소와의 차별점으로 꼽히고 있습니다.
                  </p>
                </div>
                <div className="card">
                  <h3 className="card__title" style={{ color: '#c9a84c' }}>접근성 및 편의</h3>
                  <p className="card__text">
                    강서구 내 접근성이 좋은 위치에 대한 만족도도 높습니다.
                    주차장이 완비되어 있어 자가용 이용이 편리하고,
                    대리운전 연계 서비스가 있어 음주 후 귀가도 수월하다는 의견이 많습니다.
                    마곡, 발산, 등촌, 화곡 등 인근 지역에서 오시는 분들도
                    교통이 편리하다고 평가해 주십니다.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 아쉬운 점 솔직 공개 ──── */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>아쉬운 점도 솔직하게 공유합니다</h2>
              <p>
                좋은 후기만 모아놓으면 신뢰가 떨어집니다.
                이용자 분들이 지적해 주신 아쉬운 점도 함께 공유합니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <div className="grid-2">
              <div className="card">
                <h4 className="card__title">주말 저녁 대기 시간</h4>
                <p className="card__text">
                  금요일, 토요일 저녁 시간대(20시~23시)에는 예약 없이 방문하시면
                  대기가 발생할 수 있습니다. 이 시간대는 가장 수요가 집중되는 때이므로,
                  사전 예약을 강력히 권장합니다. 평일이나 이른 저녁 시간대에는
                  대기 없이 바로 이용 가능한 경우가 대부분입니다.
                  이 부분은 인기 있는 곳의 어쩔 수 없는 한계이며,
                  룸 수를 무리하게 늘리기보다는 서비스 품질을 유지하는 것을 우선시합니다.
                </p>
              </div>

              <div className="card">
                <h4 className="card__title">평일 매니저 선택 폭</h4>
                <p className="card__text">
                  주말에 비해 평일에는 근무하는 매니저 수가 적을 수 있습니다.
                  이로 인해 초이스 시 선택의 폭이 좁아질 수 있다는 의견이 있었습니다.
                  이 부분은 업종 특성상 완전히 해결하기 어려운 부분이지만,
                  평일에도 최소한의 매니저 수를 유지하려고 노력하고 있으며,
                  사전에 전화로 당일 상황을 확인하시면 참고가 될 것입니다.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="info-box" style={{ marginTop: '2rem' }}>
              <p>
                <strong style={{ color: '#c9a84c' }}>개선 노력:</strong> 강서 노래방은
                이용자 분들의 피드백을 서비스 개선에 적극 반영하고 있습니다.
                아쉬운 점으로 지적된 부분들은 하나씩 개선해 나가고 있으며,
                완벽하지 않더라도 더 나은 서비스를 제공하기 위해 꾸준히 노력하고 있습니다.
                방문 후 느끼신 점이 있으시면 언제든 말씀해 주세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── 후기 요약 통계 ──── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-in-up">
            <div className="section__header">
              <h2>이용자 만족도 요약</h2>
              <p>
                강서 노래방 이용자 분들의 만족도를 항목별로 정리했습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger" className="grid-4">
            {[
              { label: '가격 만족도', score: '4.7 / 5.0' },
              { label: '서비스 품질', score: '4.6 / 5.0' },
              { label: '시설 청결도', score: '4.8 / 5.0' },
              { label: '재방문 의향', score: '4.5 / 5.0' },
            ].map((item) => (
              <div className="card" key={item.label} style={{ textAlign: 'center' }}>
                <p className="card__text" style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#c9a84c', margin: 0 }}>
                  {item.score}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
              * 위 점수는 최근 6개월 이용자 피드백을 기반으로 한 평균 점수입니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <h2>강서 노래방, 직접 경험해 보세요</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>
              후기만으로는 모든 것을 알 수 없습니다.
              직접 방문하시면 왜 이 후기들이 나왔는지 이해하실 수 있습니다.
              부담 없이 전화 상담부터 시작해 보세요.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/price" className="cta-btn cta-glow">
                가격 확인하기
              </Link>
              <Link to="/system" className="cta-btn cta-btn--outline">
                이용 시스템 보기
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
              <h2>후기 관련 자주 묻는 질문</h2>
              <p>강서 노래방 후기에 대해 궁금하신 점을 정리했습니다.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <FAQ faqs={REVIEW_FAQS} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
