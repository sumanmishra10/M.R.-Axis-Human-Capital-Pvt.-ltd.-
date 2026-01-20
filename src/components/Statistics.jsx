import { useState, useEffect, useRef } from 'react';

const Statistics = () => {
    const [counts, setCounts] = useState({
        customers: 0,
        visas: 0,
        stories: 0,
        happy: 0,
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { label: 'Customers Served', value: 5000, key: 'customers', suffix: '+' },
        { label: 'Visa Approved', value: 4500, key: 'visas', suffix: '+' },
        { label: 'Success Stories', value: 3800, key: 'stories', suffix: '+' },
        { label: 'Happy Customers', value: 4800, key: 'happy', suffix: '+' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        stats.forEach((stat) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    current = stat.value;
                    clearInterval(timer);
                }
                setCounts((prev) => ({
                    ...prev,
                    [stat.key]: Math.floor(current),
                }));
            }, 30);
        });
    };

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-primary">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {counts[stat.key].toLocaleString()}{stat.suffix}
                            </div>
                            <div className="text-lg text-white/90 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
