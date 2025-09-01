import React from 'react';
import { useUser } from '../hooks/useUser';
import { MODULES } from '../constants';
import Card from './common/Card';
import ProgressBar from './common/ProgressBar';
import { UserCircleIcon } from './icons/Icons';

interface DashboardProps {
    onSelectModule: (moduleId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectModule }) => {
    const { user, progress } = useUser();

    const calculateOverallProgress = () => {
        const totalActivities = MODULES.reduce((acc, module) => acc + module.activities.length, 0);
        if (totalActivities === 0) return 0;

        const completedActivities = Object.values(progress).flatMap(Object.values).filter(p => p.completed).length;
        return Math.round((completedActivities / totalActivities) * 100);
    };

    const getModuleProgress = (moduleId: string) => {
        const module = MODULES.find(m => m.id === moduleId);
        if (!module) return 0;

        const totalActivities = module.activities.length;
        if (totalActivities === 0) return 0;
        
        const completedActivities = progress[moduleId] ? Object.values(progress[moduleId]).filter(p => p.completed).length : 0;
        return Math.round((completedActivities / totalActivities) * 100);
    };

    return (
        <div className="space-y-8">
            <header className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/50 overflow-hidden shadow-lg">
                    {user?.avatar ? <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" /> : <UserCircleIcon className="w-12 h-12 text-slate-500" />}
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Hola, {user?.name}</h2>
                    <p className="text-slate-600 dark:text-slate-400">¡Listo/a para expandir tu mente crítica!</p>
                </div>
            </header>

            <Card>
                <h3 className="text-lg font-semibold mb-2">Progreso General</h3>
                <ProgressBar progress={calculateOverallProgress()} />
            </Card>

            <section>
                <h3 className="text-2xl font-bold mb-4">Módulos de Aprendizaje</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MODULES.map(module => (
                        <div key={module.id} onClick={() => onSelectModule(module.id)} className="h-full cursor-pointer">
                            <Card isHoverable={true} className="h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-3 bg-[#A3DFFF]/20 rounded-lg">
                                                <module.icon className="w-6 h-6 text-[#A3DFFF]" />
                                            </div>
                                            <h4 className="text-lg font-bold">{module.title}</h4>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{module.description}</p>
                                    </div>
                                    <div>
                                        <ProgressBar progress={getModuleProgress(module.id)} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;