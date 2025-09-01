import React, { useState } from 'react';
import type { Module, Activity, MultipleChoiceQuestion } from '../../types';
import { useUser } from '../../hooks/useUser';
import Card from '../common/Card';
import Button from '../common/Button';

interface Props {
    module: Module;
    activity: Activity<'multiple-choice'>;
    onComplete: () => void;
}

const MultipleChoiceActivity: React.FC<Props> = ({ module, activity, onComplete }) => {
    const { updateProgress } = useUser();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    const [showResults, setShowResults] = useState(false);

    const questions = activity.content.questions;
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSelect = (option: string) => {
        if (showResults) return;
        setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
            const score = questions.reduce((acc, q, index) => {
                return selectedAnswers[index] === q.answer ? acc + 1 : acc;
            }, 0);
            updateProgress(module.id, activity.id, {
                completed: true,
                score: (score / questions.length) * 100,
                answer: selectedAnswers,
            });
        }
    };
    
    const getButtonClass = (option: string) => {
        if (!showResults) {
            return selectedAnswers[currentQuestionIndex] === option
                ? 'bg-[#A3DFFF] ring-2 ring-[#A8F1D6]'
                : 'bg-slate-100 dark:bg-slate-700';
        }
        
        const isCorrect = option === currentQuestion.answer;
        const isSelected = selectedAnswers[currentQuestionIndex] === option;

        if (isCorrect) return 'bg-green-500/80 text-white';
        if (isSelected && !isCorrect) return 'bg-red-500/80 text-white';
        return 'bg-slate-100 dark:bg-slate-700 opacity-70';
    };


    return (
        <Card className="p-8">
            <h2 className="text-2xl font-bold mb-2">{activity.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{activity.description}</p>
            
            <div className="my-6">
                <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>
                <div className="space-y-3">
                    {currentQuestion.options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${getButtonClass(option)}`}
                            disabled={showResults}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {showResults ? (
                 <Button onClick={onComplete} className="w-full">
                    Finalizar
                </Button>
            ) : (
                <Button onClick={handleNext} disabled={selectedAnswers[currentQuestionIndex] === undefined} className="w-full">
                    {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
                </Button>
            )}
        </Card>
    );
};

export default MultipleChoiceActivity;
