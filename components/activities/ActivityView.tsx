import React from 'react';
import { MODULES } from '../../constants';
import MultipleChoiceActivity from './MultipleChoiceActivity';
import OpenQuestionActivity from './OpenQuestionActivity';
import MatchingActivity from './MatchingActivity';
import { ArrowLeftIcon } from '../icons/Icons';

interface ActivityViewProps {
    moduleId: string;
    activityId: string;
    onComplete: () => void;
}

const ActivityView: React.FC<ActivityViewProps> = ({ moduleId, activityId, onComplete }) => {
    const module = MODULES.find(m => m.id === moduleId);
    const activity = module?.activities.find(a => a.id === activityId);

    if (!module || !activity) {
        return (
            <div className="text-center p-8">
                <p className="text-xl mb-4">Actividad no encontrada.</p>
                <button onClick={onComplete} className="bg-[#A3DFFF] text-slate-800 font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Volver
                </button>
            </div>
        );
    }
    
    const showBackButton = activity.id === 'c3-a1';

    const renderActivity = () => {
        switch (activity.type) {
            case 'multiple-choice':
                return <MultipleChoiceActivity module={module} activity={activity} onComplete={onComplete} />;
            case 'drag-drop': // This type is used for the matching activity
                return <MatchingActivity module={module} activity={activity} onComplete={onComplete} />;
            case 'open-question':
                return <OpenQuestionActivity module={module} activity={activity} onComplete={onComplete} />;
            default:
                return <p>Tipo de actividad no soportado.</p>;
        }
    };

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            {showBackButton && (
                <button onClick={onComplete} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-4 font-semibold">
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Volver a Módulos</span>
                </button>
            )}
           {renderActivity()}
        </div>
    );
};

export default ActivityView;