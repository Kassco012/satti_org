import React from "react";
import { useLanguage } from "../components/LanguageContext";

const LoadingSpinner = () => {
    const { t } = useLanguage();

    return (
        <div className="loading-spinner flex flex-col items-center justify-center min-h-screen">
            <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto" style={{ borderColor: '#cc0000' }}>
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full h-10 w-10" style={{ backgroundColor: '#0099B1' }}></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 rounded" style={{ backgroundColor: '#0099B1' }}></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 rounded col-span-2" style={{ backgroundColor: '#0099B1' }}></div>
                                <div className="h-2 rounded col-span-1" style={{ backgroundColor: '#0099B1' }}></div>
                            </div>
                            <div className="h-2 rounded" style={{ backgroundColor: '#0099B1' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-gray-600 text-lg font-medium">
                {t('loading')}
            </div>
        </div>
    );
};

export default LoadingSpinner;