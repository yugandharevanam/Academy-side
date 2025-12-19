import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  ArrowPathIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What does ERP stand for?',
    options: [
      'Enterprise Resource Planning',
      'Electronic Resource Processing',
      'Enterprise Reporting Platform',
      'Efficient Resource Production'
    ],
    correctAnswer: 0,
    explanation: 'ERP stands for Enterprise Resource Planning - a system that integrates all business processes into one unified platform.'
  },
  {
    id: 2,
    question: 'What is the main benefit of the Procure-to-Pay (P2P) process in ERP?',
    options: [
      'Faster customer delivery',
      'Reduced manual paperwork and better spend visibility',
      'Improved product quality',
      'Better marketing analytics'
    ],
    correctAnswer: 1,
    explanation: 'P2P automates purchasing workflows, reduces paperwork, and provides real-time visibility into all spending across the organization.'
  },
  {
    id: 3,
    question: 'Which process covers the sales lifecycle from order to payment collection?',
    options: [
      'Procure-to-Pay',
      'Plan-to-Produce',
      'Order-to-Cash',
      'Record-to-Report'
    ],
    correctAnswer: 2,
    explanation: 'Order-to-Cash (O2C) encompasses the entire sales cycle from receiving customer orders to collecting payment.'
  },
  {
    id: 4,
    question: 'What percentage of organizations report positive ROI from ERP?',
    options: [
      '25%',
      '53%',
      '75%',
      '90%'
    ],
    correctAnswer: 1,
    explanation: '53% of organizations report a positive ROI from ERP implementations, showing its significant business value.'
  },
  {
    id: 5,
    question: 'What is a key challenge during ERP implementation?',
    options: [
      'Too much automation',
      'Change management and user adoption',
      'Excessive data visibility',
      'Too many integrations'
    ],
    correctAnswer: 1,
    explanation: 'Change management is crucial - getting user buy-in and training employees properly can make or break ERP success.'
  },
  {
    id: 6,
    question: 'Which of the following is NOT typically a core ERP module?',
    options: [
      'Finance & Accounting',
      'Supply Chain Management',
      'Social Media Marketing',
      'Human Resources'
    ],
    correctAnswer: 2,
    explanation: 'While ERP systems may integrate with marketing tools, social media marketing is not a core ERP module. Core modules include Finance, Supply Chain, HR, and Manufacturing.'
  }
]

export const ERPQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex)
      setShowResult(true)

      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }

      const newAnswered = [...answeredQuestions]
      newAnswered[currentQuestion] = true
      setAnsweredQuestions(newAnswered)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
    setQuizCompleted(false)
  }

  const scorePercentage = ((score / questions.length) * 100).toFixed(0)
  const question = questions[currentQuestion]

  return (
    <SectionContainer id="erp-quiz" background="white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full mb-4">
          <AcademicCapIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">Test Your Knowledge</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          ERP Knowledge Quiz
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Challenge yourself and see how much you've learned about ERP systems
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>Score: {score}/{answeredQuestions.filter(Boolean).length}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {question.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = index === question.correctAnswer
                  const showFeedback = showResult && isSelected

                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                      whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        showFeedback
                          ? isCorrect
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : isSelected
                          ? 'border-brand-primary bg-brand-primary/5'
                          : 'border-gray-200 hover:border-brand-primary/50'
                      } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">{option}</span>
                        {showFeedback && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                          >
                            {isCorrect ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <XCircleIcon className="w-6 h-6 text-red-500" />
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"
                  >
                    <h4 className="font-semibold text-blue-900 mb-2">
                      {selectedAnswer === question.correctAnswer ? '✓ Correct!' : 'Not quite right'}
                    </h4>
                    <p className="text-sm text-blue-800">
                      {question.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {showResult && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleNext}
                  className="w-full bg-brand-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next Question <ArrowRightIcon className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      See Results <TrophyIcon className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-2xl p-12 text-center text-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <TrophyIcon className="w-24 h-24 mx-auto mb-6" />
              </motion.div>

              <h3 className="text-4xl font-bold mb-4">Quiz Complete!</h3>

              <div className="text-7xl font-bold mb-4">
                {scorePercentage}%
              </div>

              <p className="text-xl mb-8">
                You got {score} out of {questions.length} questions correct
              </p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-lg">
                  {Number(scorePercentage) >= 80
                    ? '🎉 Excellent! You have a strong understanding of ERP!'
                    : Number(scorePercentage) >= 60
                    ? '👍 Good job! Keep learning to master ERP concepts.'
                    : '📚 Keep studying! Review the content and try again.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="bg-white text-brand-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                  Retake Quiz
                </button>
                <a
                  href="https://www.evanam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
                >
                  Learn More with Evanam
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  )
}
