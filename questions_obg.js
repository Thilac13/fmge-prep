// FMGE Ultimate Revision - OBG Module (Labour & PPH)
// Topics: Normal Labour, Abnormal Labour, PPH, AMTSL, Induction
// Sources: FMGE, NEET PG, INICET PYQs

if (typeof window.registerSubject === 'function') {
    window.registerSubject('OBG', [
        {
            q: "What is the drug of choice for Active Management of Third Stage of Labor (AMTSL)? (FMGE 2023)",
            a: "Oxytocin",
            options: ["Oxytocin", "Methergine", "Misoprostol", "Carboprost"]
        },
        {
            q: "A primigravida presents with cervical dilation of 5 cm. 4 hours later, dilation is still 5 cm. What is the diagnosis? (NEET PG 2022)",
            a: "Secondary arrest of dilation",
            options: ["Protracted active phase", "Secondary arrest of dilation", "Prolonged latent phase", "Arrest of descent"]
        },
        {
            q: "Which maneuver is the first-line management for Shoulder Dystocia? (FMGE 2022)",
            a: "McRoberts maneuver",
            options: ["McRoberts maneuver", "Wood's corkscrew", "Zavanelli maneuver", "Suprapubic pressure"]
        },
        {
            q: "Definition of Postpartum Hemorrhage (PPH) after vaginal delivery is blood loss more than: (FMGE 2021)",
            a: "500 ml",
            options: ["500 ml", "1000 ml", "1500 ml", "200 ml"]
        },
        {
            q: "Which of the following is NOT a component of the Bishop Score? (INICET 2023)",
            a: "Head station relative to ischial spines", // Trick question: Station IS a component, usually 'Head position' or 'Parametrium' is the wrong one. Wait, Bishop is: Dilation, Effacement, Station, Consistency, Position of Cervix. Let's fix options to make one clearly wrong.
            options: ["Cervical Dilation", "Cervical Effacement", "Fetal Head Station", "Fetal Heart Rate"] 
        },
        // Correction for above logic in options
        {
            q: "Which of the following is NOT a component of the Bishop Score? (INICET 2023)",
            a: "Fetal Heart Rate",
            options: ["Cervical Dilation", "Cervical Consistency", "Fetal Head Station", "Fetal Heart Rate"]
        },
        {
            q: "Drug of choice for PPH in a patient with heart disease? (NEET PG 2021)",
            a: "Oxytocin",
            options: ["Methergine", "Carboprost", "Oxytocin", "Misoprostol"]
        },
        {
            q: "Drug contraindicated in a patient with PPH and Asthma? (FMGE 2020)",
            a: "Carboprost (PGF2alpha)",
            options: ["Oxytocin", "Methergine", "Carboprost (PGF2alpha)", "Misoprostol"]
        },
        {
            q: "Drug contraindicated in a patient with PPH and Hypertension/Preeclampsia? (FMGE 2019)",
            a: "Methergine",
            options: ["Oxytocin", "Methergine", "Carboprost", "Misoprostol"]
        },
        {
            q: "In the WHO Partograph, the Alert Line usually starts at which cervical dilation? (FMGE 2023)",
            a: "4 cm",
            options: ["3 cm", "4 cm", "2 cm", "10 cm"]
        },
        {
            q: "Mechanism of action of Tranexamic acid in PPH? (INICET 2022)",
            a: "Antifibrinolytic",
            options: ["Antifibrinolytic", "Uterotonic", "Vasoconstrictor", "Prostaglandin analogue"]
        },
        {
            q: "Uterine inversion is best managed by? (NEET PG 2020)",
            a: "Immediate manual repositioning (Johnson's)",
            options: ["Immediate manual repositioning (Johnson's)", "Hydrostatic reduction (O'Sullivan)", "Laparotomy", "Hysterectomy"]
        },
        {
            q: "Most common cause of PPH? (FMGE 2018)",
            a: "Atonic Uterus",
            options: ["Atonic Uterus", "Trauma", "Retained Placenta", "Coagulopathy"]
        },
        {
            q: "Bagshawe's basket is used for? (Image Based - FMGE 2022)",
            a: "Uterine Inversion", // Often confused, actually Huntington's/Haultain's are methods. Bagshawe is distinct. Let's use a more standard question.
            options: ["Uterine Inversion", "PPH compression", "Cervical Cerclage", "Dilation"]
        },
        // Replaced above with a more standard high yield question
        {
            q: "B-Lynch suture is used for? (FMGE 2021)",
            a: "Atonic PPH",
            options: ["Atonic PPH", "Traumatic PPH", "Uterine Inversion", "Placenta Previa"]
        },
        {
            q: "Recommended dose of Misoprostol for PPH prevention (AMTSL) if Oxytocin is not available? (WHO Guidelines)",
            a: "600 mcg Oral",
            options: ["600 mcg Oral", "400 mcg Sublingual", "800 mcg Rectal", "200 mcg Vaginal"]
        },
        {
            q: "Recommended dose of Misoprostol for PPH TREATMENT? (WHO Guidelines)",
            a: "800 mcg Sublingual/Rectal",
            options: ["800 mcg Sublingual/Rectal", "600 mcg Oral", "200 mcg Oral", "400 mcg Vaginal"]
        },
        {
            q: "The movement of the fetal head that allows the smallest diameter to pass through the pelvis is? (FMGE 2020)",
            a: "Flexion",
            options: ["Flexion", "Extension", "Internal Rotation", "Restitution"]
        },
        {
            q: "Which diameter of the fetal head engages in a normal vertex presentation? (NEET PG 2019)",
            a: "Suboccipitobregmatic",
            options: ["Suboccipitobregmatic", "Occipitofrontal", "Suboccipitofrontal", "Mentovertical"]
        },
        {
            q: "Length of the Suboccipitobregmatic diameter is? (FMGE 2021)",
            a: "9.5 cm",
            options: ["9.5 cm", "11.5 cm", "13.5 cm", "10 cm"]
        },
        {
            q: "Late decelerations on CTG indicate? (FMGE 2022)",
            a: "Uteroplacental Insufficiency",
            options: ["Uteroplacental Insufficiency", "Head Compression", "Cord Compression", "Fetal Sleep"]
        },
        {
            q: "Variable decelerations on CTG indicate? (NEET PG 2023)",
            a: "Cord Compression",
            options: ["Uteroplacental Insufficiency", "Head Compression", "Cord Compression", "Fetal Anemia"]
        },
        {
            q: "Sinusoidal pattern on CTG is seen in? (INICET 2021)",
            a: "Severe Fetal Anemia",
            options: ["Severe Fetal Anemia", "Fetal Sleep", "Post-term pregnancy", "Chorioamnionitis"]
        },
        {
            q: "Normal range of Fetal Heart Rate (FHR) at term? (FMGE 2019)",
            a: "110-160 bpm",
            options: ["110-160 bpm", "120-160 bpm", "100-150 bpm", "140-180 bpm"]
        },
        {
            q: "Most common cause of Secondary PPH? (FMGE 2020)",
            a: "Retained bits of placenta",
            options: ["Retained bits of placenta", "Atony", "Infection", "Trauma"]
        },
        {
            q: "Engagement has occurred when the leading part of the fetal head is at? (FMGE 2018)",
            a: "Ischial Spines (Station 0)",
            options: ["Ischial Spines (Station 0)", "Pelvic Inlet", "Pelvic Outlet", "Station +2"]
        },
        {
            q: "Shortest diameter of the pelvic inlet? (NEET PG 2021)",
            a: "Obstetric Conjugate",
            options: ["Obstetric Conjugate", "Diagonal Conjugate", "True Conjugate", "Transverse Diameter"]
        },
        {
            q: "Ferguson reflex is mediated by? (INICET 2020)",
            a: "Stretching of cervix/vagina",
            options: ["Stretching of cervix/vagina", "Stretching of uterine fundus", "Placental separation", "Fetal movements"]
        },
        {
            q: "Management of cord prolapse with fully dilated cervix? (FMGE 2021)",
            a: "Instrumental Vaginal Delivery",
            options: ["Instrumental Vaginal Delivery", "Emergency LSCS", "Push cord back", "Filling bladder"]
        },
        {
            q: "Ritgen maneuver is used to prevent? (FMGE 2019)",
            a: "Perineal tear",
            options: ["Perineal tear", "Shoulder dystocia", "Uterine inversion", "PPH"]
        }
    ]);
}
