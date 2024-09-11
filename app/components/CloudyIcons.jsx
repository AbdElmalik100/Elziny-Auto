import { motion } from 'framer-motion'
import IconCloud from "./ui/IconCloud";

function CloudyIcons() {
    const slugs = [
        "rollsroyce",
        "landrover",
        "bmw",
        "mercedes",
        "lamborghini",
        "bentley",
        "porsche",
        "mclaren",
        "ferrari",
        "tesla"
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ type: "tween", ease: "easeOut", delay: 0.3 }}
            whileInView={{ opacity: 1 }}
        >
            <IconCloud iconSlugs={slugs} ></IconCloud>
        </motion.div>
    )
}

export default CloudyIcons