import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, PieChart, LineChart } from 'lucide-react';
import '../styles/home.css';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);
  const featureCardsRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const featureCards = [
    {
      icon: <BarChart3 />,
      title: "Data Analytics",
      description: "Powerful analytics tools for data-driven insights",
      stats: [
        { value: "85%", label: "Accuracy" },
        { value: "2x", label: "Faster" }
      ]
    },
    {
      icon: <PieChart />,
      title: "Visualization",
      description: "Interactive charts and visual representations",
      stats: [
        { value: "50+", label: "Chart Types" },
        { value: "4K", label: "Resolution" }
      ]
    },
    {
      icon: <LineChart />,
      title: "Trend Analysis",
      description: "Advanced trend detection and forecasting",
      stats: [
        { value: "95%", label: "Precision" },
        { value: "Real-time", label: "Updates" }
      ]
    }
  ];

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    initial: {
      y: 100,
      opacity: 0,
      scale: 0.95
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        duration: 0.8
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleCards = entries.map(entry => entry.isIntersecting);
        setVisibleCards(newVisibleCards);
      },
      { threshold: 0.1 }
    );

    if (featureCardsRef.current) {
      const cards = featureCardsRef.current.querySelectorAll('.feature-card');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [showContent]);

  const dropdownContent = {
    Private: {
      title: 'Discover DeVoteX Private',
      sections: [
        {
          title: 'Daily Elections',
          items: ['Role Transfer', 'Analytics', 'Budgetings', 'Accounts']
        },
        {
          title: 'Financial Elections',
          items: ['IPO Bidding', 'Global Transfers', 'Security']
        }
      ]
    },
    Public: {
      title: 'Discover DeVoteX Public',
      sections: [
        {
          title: 'Presidency Elections',
          items: ['Election Funding', 'Role Management', 'Result']
        },
        {
          title: 'Enterprise Elections',
          items: ['Board Of Directors Elections', 'Role Change']
        }
      ]
    },
    company: {
      title: 'About DeVoteX',
      sections: [
        {
          title: 'Company',
          items: ['About Us', 'Careers', 'Press', 'Contact']
        },
        {
          title: 'Resources',
          items: ['Blog', 'Help Center', 'Developer Docs']
        }
      ]
    }
  };

  return (
    <div className="home-container">
      <AnimatePresence>
        {!showContent && (
          <motion.div
            className="logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          >
            <motion.h1
              className="logo-text"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              DeVoteX
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showContent && (
          <>
            <motion.nav
              className="navbar"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
            >
              <div className="nav-left">
                {Object.entries(dropdownContent).map(([key, content]) => (
                  <div key={key} className="dropdown-container">
                    <button className="nav-btn">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                    <div className="dropdown-menu">
                      <h3>{content.title}</h3>
                      {content.sections.map((section, index) => (
                        <div key={index} className="dropdown-section">
                          <div className="dropdown-section-title">{section.title}</div>
                          {section.items.map((item, itemIndex) => (
                            <a key={itemIndex} href="#" className="dropdown-item">
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="nav-center">
                <h1 className="nav-logo">DeVoteX</h1>
              </div>

              <div className="nav-right">
                <button className="nav-btn">Help</button>
                <button className="nav-btn">Blog</button>
                <button className="nav-btn">EN</button>
                <button className="nav-btn nav-btn-dark">Get Started</button>
              </div>
            </motion.nav>

            <motion.div
              className="black-container"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                duration: 0.8,
                delay: 0.4
              }}
            >
              <div className="content-container">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <motion.h1 
                    className="main-heading"
                    ref={headingRef}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: "easeOut"
                    }}
                  >
                    <motion.span
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    >
                      Secure, Transparent, 
                    </motion.span>
                    <motion.span
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    >
                      and Tamper-Proof Voting
                    </motion.span>
                  </motion.h1>
                  
                  <motion.p 
                    className="sub-heading"
                    ref={subHeadingRef}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                  >
                    Vote with confidence in a decentralized, fraud-resistant system<br />
                    where every ballot is secure, verifiable, and anonymous.
                  </motion.p>
                  
                  <motion.button 
                    className="open-account-btn"
                    ref={buttonRef}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    Open DeVoteX Account
                  </motion.button>

                  <AnimatePresence>
                    {showCard && (
                      <motion.div
                        className="card-interface"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          mass: 1,
                          duration: 0.8,
                          delay: 0.2
                        }}
                      >
                        <div className="card-header">
                          <h2>Wallets</h2>
                          <div className="card-tabs">
                            <button className="card-tab active">My Wallets</button>
                            <button className="card-tab">All Wallets</button>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-section">
                            <div className="card-title">
                              <h3>My Wallets</h3>
                              <span className="card-count">6</span>
                              <button className="add-card-btn">+</button>
                            </div>
                            <div className="credit-card">
                              <div className="card-type">Virtual Wallet</div>
                              <div className="card-number">0xf1 **** **** ****</div>
                              <div className="card-valid">Verified</div>
                            </div>
                          </div>
                          <div className="card-section">
                            <div className="card-balance">
                              <h3>Wallet Balance (BTC)</h3>
                              <div className="balance-amount">20.3</div>
                              <div className="transaction">
                                <span>Today</span>
                                <span>$1965621.19</span>
                              </div>
                            </div>
                          </div>
                          <div className="card-section">
                            <div className="card-statistics">
                              <div className="statistic-header">
                                <h3>Statistic</h3>
                                <select className="period-select">
                                  <option>Week</option>
                                  <option>Month</option>
                                  <option>Year</option>
                                </select>
                              </div>
                              <div className="spending-chart">
                                <div className="chart-segment">
                                  <span className="segment shopping">Shopping 45%</span>
                                  <span className="segment subscriptions">Subscriptions 35%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="below-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="global-payments"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.2
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="tag"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  Daily Elections
                </motion.div>
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4 }
                  }}
                  viewport={{ once: true }}
                >
                  Efficiency at its best: DeVoteX's<br />
                  Weekly Elections
                </motion.h2>
                <motion.p 
                  className="section-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5 }
                  }}
                  viewport={{ once: true }}
                >
                  Empowering global decentralization.
                </motion.p>

                <motion.div 
                  className="payments-grid"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: { 
                      staggerChildren: 0.2,
                      delayChildren: 0.6
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="payments-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        type: "spring",
                        damping: 20,
                        stiffness: 100
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="tag">Role Transfer</div>
                    <h3 className="payments-title">
                      Global elections: your<br />
                      gateway to secure<br />
                      elections
                    </h3>
                    <p className="payments-description">
                      DeVoteX: simplifying elections in the UK, Europe, and<br />
                      internationally.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="payment-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        delay: 0.2
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="payment-form">
                      <h4>Amount</h4>
                      <div className="amount-input">
                        <span>Send Money</span>
                        <div className="amount-display">
                          <span>€2,298</span>
                          <div className="balance">Balance: €6,950.00</div>
                        </div>
                        <div className="currency-select">
                          <span className="currency-flag">🇪🇺</span>
                          <span>EUR</span>
                          <span className="arrow">▼</span>
                        </div>
                      </div>

                      <div className="recipient-input">
                        <h4>Who are you sending money to?</h4>
                        <div className="recipient-select">
                          <span className="avatar">JS</span>
                          <span>John Smith</span>
                          <span className="arrow">▼</span>
                        </div>
                      </div>

                      <motion.button 
                        className="send-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Confirm and Send
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="features-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={featuresContainerVariants}
            >
              <motion.div 
                className="features-header"
                variants={headerVariants}
              >
                <motion.span 
                  className="features-tag"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Features
                </motion.span>
                <motion.h2 className="features-title">
                  Everything you need
                </motion.h2>
                <motion.p className="features-subtitle">
                  Comprehensive tools and features to manage your elections effectively
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="features-grid"
                variants={featuresContainerVariants}
                ref={featureCardsRef}
              >
                {featureCards.map((card, index) => (
                  <motion.div 
                    key={index}
                    className="feature-card"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="feature-icon"
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="feature-title">{card.title}</h3>
                    <p className="feature-description">{card.description}</p>
                    <div className="feature-stats">
                      {card.stats.map((stat, statIndex) => (
                        <motion.div 
                          key={statIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 * statIndex }}
                        >
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-label">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;