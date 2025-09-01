import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import ProfileSetup from './ProfileSetup';
import Layout from './Layout';
import Dashboard from './Dashboard';
import ModuleView from './ModuleView';
import ActivityView from './activities/ActivityView';

const AppContent: React.FC = () => {
    const { user, isLoading } = useUser();
    const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
    const [currentActivity, setCurrentActivity] = useState<{moduleId: string, activityId: string} | null>(null);


    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-slate-900">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#A3DFFF]"></div>
            </div>
        );
    }

    if (!user) {
        return <ProfileSetup />;
    }
    
    const handleSelectActivity = (moduleId: string, activityId: string) => {
        setCurrentActivity({ moduleId, activityId });
    };
    
    const handleCompleteActivity = () => {
        setCurrentActivity(null);
    };
    
    const handleBackToDashboard = () => {
        setSelectedModuleId(null);
        setCurrentActivity(null);
    };

    if (currentActivity) {
         return (
            <Layout>
                <ActivityView 
                    moduleId={currentActivity.moduleId}
                    activityId={currentActivity.activityId}
                    onComplete={handleCompleteActivity}
                />
            </Layout>
        );
    }


    if (selectedModuleId) {
        return (
            <Layout>
                <ModuleView 
                    moduleId={selectedModuleId} 
                    onBack={handleBackToDashboard}
                    onSelectActivity={(activityId) => handleSelectActivity(selectedModuleId, activityId)}
                />
            </Layout>
        );
    }

    return (
        <Layout>
            <Dashboard onSelectModule={setSelectedModuleId} />
        </Layout>
    );
};

export default AppContent;
