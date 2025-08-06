'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface WeatherData {
    id: number;
    location: string;
    temperature: number;
    climate: string;
}

export default function WeatherApp() {
    const api = 'http://localhost:3001/weather';

    const [data, setData] = useState<WeatherData[]>([]);
    const [form, setForm] = useState({
        location: '',
        temperature: '',
        climate: '',
    });
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const res = await axios.get(api);
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async () => {
        if (!form.location || !form.temperature || !form.climate) return;

        setLoading(true);
        try {
            const payload = {
                location: form.location,
                temperature: parseFloat(form.temperature),
                climate: form.climate,
            };

            await axios.post(api, payload);
            setForm({ location: '', temperature: '', climate: '' });
            fetchData();
        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setLoading(false);
        }
    };

    const getclimateIcon = (climate: string) => {
        const lower = climate.toLowerCase();
        if (lower.includes('rain') || lower.includes('rain')) return '🌧️';
        if (lower.includes('sun') || lower.includes('sun') || lower.includes('sun')) return '☀️';
        if (lower.includes('cold') || lower.includes('cold') || lower.includes('cold')) return '❄️';
        if (lower.includes('cloud') || lower.includes('cloud')) return '☁️';
        if (lower.includes('storm') || lower.includes('storm')) return '⛈️';
        return '🌤️';
    };

    const getclimateColor = (climate: string) => {
        const lower = climate.toLowerCase();
        if (lower.includes('rain') || lower.includes('rain')) return 'text-blue-600 dark:text-blue-400';
        if (lower.includes('sun') || lower.includes('sun') || lower.includes('sun')) return 'text-yellow-600 dark:text-yellow-400';
        if (lower.includes('cold') || lower.includes('cold') || lower.includes('cold')) return 'text-cyan-600 dark:text-cyan-400';
        if (lower.includes('cloud') || lower.includes('cloud')) return 'text-gray-600 dark:text-gray-400';
        if (lower.includes('storm') || lower.includes('storm')) return 'text-purple-600 dark:text-purple-400';
        return 'text-sky-600 dark:text-sky-400';
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"></div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-16 w-24 h-24 bg-sky-200 dark:bg-sky-700 rounded-full opacity-15 animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-25 animate-pulse delay-1000"></div>

            <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8 fade-in">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-4"
                    >
                        <span>←</span>
                        <span className="font-thai">Return to home page</span>
                    </Link>

                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
                        🌦️ Weather Tracker
                    </h1>
                </div>

                {/* Add Weather Form */}
                <div className="glass-container p-6 mb-8 fade-in">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center space-x-2 font-thai">
                        <span>Add weather information</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-thai">
                                📍 Location
                            </label>
                            <input
                                type="text"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Vientiane"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-thai">
                                🌡️ Temperature (°C)
                            </label>
                            <input
                                type="number"
                                value={form.temperature}
                                onChange={(e) => setForm({ ...form, temperature: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="32"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-thai">
                                🌤️ Climate
                            </label>
                            <input
                                type="text"
                                value={form.climate}
                                onChange={(e) => setForm({ ...form, climate: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Sun, Rain, Cold, Cloud, Storm"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !form.location || !form.temperature || !form.climate}
                            className="group relative inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span className="flex items-center space-x-2">
                                <span className="text-lg">{loading ? '' : ''}</span>
                                <span className="font-thai">{loading ? 'Recording...' : 'Record data'}</span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Weather Records */}
                <div className="glass-container p-6 fade-in">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center space-x-2 font-thai">
                        <span>Weather records</span>
                    </h2>

                    {data.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🌤️</div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-thai">
                                There is no weather information yet.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 font-thai">
                                Add your first weather information!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="weather-card p-6 space-y-3 hover:scale-105 transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-2xl">{getclimateIcon(item.climate)}</span>
                                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                                                {item.location}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400 font-thai">Temperature</span>
                                            <span className="text-2xl font-bold temperature">
                                                {item.temperature}°C
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400 font-thai">Climate</span>
                                            <span className={`font-medium ${getclimateColor(item.climate)}`}>
                                                {item.climate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}