// FMGE Ultimate Revision - Ophthalmology Module
// Source: Revision Ophtha Nov 2025 PDF

if (typeof window.registerSubject === 'function') {
    window.registerSubject('Ophthalmology', [
        // Exam Techniques & Instruments
        { q: "Magnification of Direct Ophthalmoscope is:", a: "15 X", options: ["15 X", "5 X", "20 X", "100 X"] },
        { q: "Image seen in Direct Ophthalmoscopy is:", a: "Virtual Erect", options: ["Virtual Erect", "Real Inverted", "Real Erect", "Virtual Inverted"] },
        { q: "Direct Ophthalmoscopy is best for examining:", a: "Central Retina (optic nerve and macula)", options: ["Peripheral Retina", "Central Retina (optic nerve and macula)", "Ora Serrata", "Vitreous Base"] },
        { q: "Magnification of Indirect Ophthalmoscope is:", a: "3-5 X", options: ["15 X", "3-5 X", "10 X", "20 X"] },
        { q: "Image seen in Indirect Ophthalmoscopy is:", a: "Real Inverted", options: ["Virtual Erect", "Real Erect", "Real Inverted", "Virtual Inverted"] },
        { q: "Indirect Ophthalmoscopy provides:", a: "Binocular stereoscopic view", options: ["Uniocular view", "Binocular stereoscopic view", "Monocular flat view", "Magnified inverted view"] },
        { q: "Condensing lens power used in Indirect Ophthalmoscopy is:", a: "+20D", options: ["+20D", "+90D", "-20D", "+40D"] },
        { q: "Lens used for Fundus Examination with Slit Lamp is:", a: "+90D lens", options: ["+20D lens", "+90D lens", "-58D lens", "Plain mirror"] },
        { q: "Distant Direct Ophthalmoscopy is done at a distance of:", a: "25 cm", options: ["1 meter", "25 cm", "50 cm", "10 cm"] },
        { q: "Leucocoria (White Reflex) is a sign of:", a: "Retinoblastoma", options: ["Glaucoma", "Retinoblastoma", "Conjunctivitis", "Uveitis"] },
        { q: "Absence of Red Reflex typically indicates:", a: "Dense corneal opacity or mature cataract", options: ["Glaucoma", "Dense corneal opacity or mature cataract", "Conjunctivitis", "Myopia"] },

        // Instruments
        { q: "Instrument used to hold Superior Rectus muscle in ECCE/SICS?", a: "Superior Rectus Forceps (with wide teeth)", options: ["Lims forceps", "McPherson forceps", "Superior Rectus Forceps", "Vannas scissors"] },
        { q: "Corneo-scleral Forceps (Lim's forceps) are characterized by?", a: "Fine teeth", options: ["Wide teeth", "Fine teeth", "No teeth", "Curved tip"] },
        { q: "McPherson Forceps are used for?", a: "Corneoscleral suturing and holding IOL", options: ["Holding muscle", "Corneoscleral suturing and holding IOL", "Cutting cornea", "Dilating pupil"] },
        { q: "Wire Speculum is used to:", a: "Keep the lids open", options: ["Hold the iris", "Keep the lids open", "Retract the conjunctiva", "Measure corneal diameter"] },
        { q: "Instrument used for corneoscleral incisions?", a: "Keratome / Crescent blade", options: ["Vannas scissors", "Keratome", "Needle holder", "Caliper"] },
        { q: "Phaco Probe is used in which surgery?", a: "Phacoemulsification", options: ["SICS", "Phacoemulsification", "ECCE", "Trabeculectomy"] },
        { q: "Needle Holder is used for?", a: "Suturing", options: ["Cutting", "Suturing", "Holding tissue", "Cautery"] },
        { q: "Cystitome is used for?", a: "Capsulotomy / Capsulorhexis", options: ["Incision", "Capsulotomy / Capsulorhexis", "Iridectomy", "Suturing"] },
        { q: "Vannas Scissors are used for?", a: "Cutting Iris / Capsule / Fine membranes", options: ["Cutting Sclera", "Cutting Iris / Capsule", "Cutting Muscles", "Cutting Sutures"] },
        { q: "Simcoe Cannula is used for?", a: "Irrigation and Aspiration", options: ["Injecting Viscoelastic", "Irrigation and Aspiration", "Hydrodissection", "Anesthesia"] },
        { q: "Lacrimal Probe is used for?", a: "Probing Nasolacrimal Duct", options: ["Probing Cornea", "Probing Nasolacrimal Duct", "Dilating Punctum", "Retracting tissue"] },
        { q: "Chalazion Clamp is used for?", a: "Incision and Curettage of Chalazion", options: ["Cataract surgery", "Incision and Curettage of Chalazion", "Pterygium excision", "DCR"] },

        // Anesthesia & Pharmacology
        { q: "Drug of choice for local anesthesia in cataract surgery (Peribulbar)?", a: "2% Lignocaine + 0.5% Bupivacaine", options: ["2% Lignocaine + 0.5% Bupivacaine", "4% Lignocaine", "0.5% Proparacaine", "Adrenaline only"] },
        { q: "Topical anesthesia eye drop used in cataract surgery?", a: "0.5% Proparacaine", options: ["0.5% Proparacaine", "4% Xylocaine", "Atropine", "Pilocarpine"] },
        { q: "Which is a viscoelastic substance used in eye surgery?", a: "Sodium Hyaluronate", options: ["Sodium Hyaluronate", "Sodium Chloride", "Ringer Lactate", "Mannitol"] },
        { q: "Other examples of viscoelastic substances include:", a: "Methyl Cellulose, Chondroitin Sulphate", options: ["Methyl Cellulose, Chondroitin Sulphate", "Atropine, Homatropine", "Lignocaine, Bupivacaine", "Timolol, Betaxolol"] },

        // Cornea & Lens
        { q: "Vossius Ring is seen on:", a: "Anterior lens capsule", options: ["Posterior lens capsule", "Anterior lens capsule", "Corneal endothelium", "Iris"] },
        { q: "Causes of Complicated Cataract include:", a: "Uveitis", options: ["Glaucoma", "Uveitis", "Conjunctivitis", "Blepharitis"] },
        { q: "Polychromatic Lustre is a sign of:", a: "Complicated Cataract", options: ["Nuclear Cataract", "Cortical Cataract", "Complicated Cataract", "Traumatic Cataract"] },
        { q: "Rosette Cataract is typically caused by:", a: "Trauma", options: ["Diabetes", "Trauma", "Steroids", "Aging"] },
        { q: "Snowflake Cataract is seen in:", a: "Diabetes Mellitus", options: ["Galactosemia", "Diabetes Mellitus", "Wilson's Disease", "Hypocalcemia"] },
        { q: "Oil Drop Cataract is seen in:", a: "Galactosemia", options: ["Diabetes", "Galactosemia", "Lowe's Syndrome", "Myotonic Dystrophy"] },
        { q: "Sunflower Cataract is seen in:", a: "Wilson's Disease", options: ["Diabetes", "Wilson's Disease", "Chalcosis", "Siderosis"] },
        { q: "Christmas Tree Cataract is seen in:", a: "Myotonic Dystrophy", options: ["Myotonic Dystrophy", "Down Syndrome", "Marfan Syndrome", "Alport Syndrome"] },
        { q: "Blue Dot Cataract is also known as:", a: "Cataracta Punctata Caerulea", options: ["Cataracta Punctata Caerulea", "Zonular Cataract", "Nuclear Cataract", "Morgagnian Cataract"] },
        { q: "Subluxation of lens in Marfan's Syndrome is typically:", a: "Supero-temporal", options: ["Supero-temporal", "Infero-nasal", "Anterior", "Posterior"] },
        { q: "Subluxation of lens in Homocystinuria is typically:", a: "Infero-nasal", options: ["Supero-temporal", "Infero-nasal", "Complete dislocation", "Superior"] },

        // Retina & Neuro-ophthalmology
        { q: "Cherry Red Spot is a characteristic finding in:", a: "CRAO", options: ["CRVO", "CRAO", "Diabetic Retinopathy", "Retinitis Pigmentosa"] },
        { q: "Blood and Thunder appearance of fundus is seen in:", a: "CRVO", options: ["CRAO", "CRVO", "Hypertensive Retinopathy", "Diabetic Retinopathy"] },
        { q: "Roth spots are seen in:", a: "Subacute Bacterial Endocarditis", options: ["Hypertension", "Diabetes", "Subacute Bacterial Endocarditis", "Glaucoma"] },
        { q: "Cotton Wool Spots indicate:", a: "Ischemia / Infarct of nerve fiber layer", options: ["Lipid exudation", "Ischemia / Infarct of nerve fiber layer", "Hemorrhage", "Drusen"] },
        { q: "Hard Exudates are composed of:", a: "Lipid deposits", options: ["Lipid deposits", "Calcium", "Protein", "Blood"] },
        { q: "Most common cause of vitreous hemorrhage in adults?", a: "Diabetic Retinopathy", options: ["Trauma", "Diabetic Retinopathy", "Retinal Detachment", "Eales Disease"] },
        { q: "Night blindness is a cardinal symptom of:", a: "Retinitis Pigmentosa", options: ["Cataract", "Retinitis Pigmentosa", "Glaucoma", "Macular Degeneration"] },
        { q: "Bone spicule pigmentation is seen in:", a: "Retinitis Pigmentosa", options: ["Retinitis Pigmentosa", "Diabetic Retinopathy", "CRAO", "Choroiditis"] },
        { q: "Retinitis Pigmentosa is associated with which syndrome?", a: "Usher Syndrome (Deafness)", options: ["Down Syndrome", "Usher Syndrome", "Marfan Syndrome", "Sturge-Weber Syndrome"] },
        { q: "Laurence-Moon-Biedl syndrome features include:", a: "Retinitis Pigmentosa, Obesity, Polydactyly", options: ["Retinitis Pigmentosa, Obesity, Polydactyly", "Cataract, Deafness, Heart defects", "Glaucoma, Port wine stain", "Keratoconus, Atopy"] },

        // Glaucoma
        { q: "First line drug for Primary Open Angle Glaucoma?", a: "Prostaglandin Analogues (Latanoprost)", options: ["Timolol", "Pilocarpine", "Prostaglandin Analogues", "Acetazolamide"] },
        { q: "Side effect of Latanoprost?", a: "Heterochromia iridis / Eyelash growth", options: ["Bradycardia", "Heterochromia iridis", "Dry mouth", "Apnea"] },
        { q: "Drug of choice for Acute Angle Closure Glaucoma?", a: "IV Mannitol / Acetazolamide", options: ["IV Mannitol", "Topical Timolol", "Oral Glycerol", "Atropine"] },
        { q: "Definitive treatment for Angle Closure Glaucoma?", a: "Laser Peripheral Iridotomy (YAG PI)", options: ["Trabeculectomy", "Laser Peripheral Iridotomy", "Cataract extraction", "Cyclocryotherapy"] },
        { q: "Visual field defect characteristic of Glaucoma?", a: "Arcuate scotoma (Bjerrum's)", options: ["Central scotoma", "Arcuate scotoma", "Homonymous hemianopia", "Bitemporal hemianopia"] },
        { q: "Cup to Disc ratio > 0.5 is suspicious of:", a: "Glaucoma", options: ["Cataract", "Glaucoma", "Papilledema", "Optic Atrophy"] },

        // Uvea
        { q: "KPs (Keratic Precipitates) are seen on:", a: "Corneal endothelium", options: ["Anterior lens capsule", "Corneal endothelium", "Iris surface", "Vitreous"] },
        { q: "Mutton Fat KPs are characteristic of:", a: "Granulomatous Uveitis", options: ["Non-granulomatous Uveitis", "Granulomatous Uveitis", "Acute Anterior Uveitis", "Fuchs Heterochromic Iridocyclitis"] },
        { q: "Festooned Pupil is seen in:", a: "Iridocyclitis (due to posterior synechiae)", options: ["Glaucoma", "Iridocyclitis", "Cataract", "Trauma"] },
        { q: "Iris Bombe leads to:", a: "Secondary Angle Closure Glaucoma", options: ["Open Angle Glaucoma", "Secondary Angle Closure Glaucoma", "Hypotony", "Phthisis bulbi"] },
        { q: "Treatment of Anterior Uveitis includes:", a: "Steroids + Cycloplegics", options: ["Antibiotics", "Steroids + Cycloplegics", "Miotics", "Antivirals"] },
        { q: "Snowbanking is a feature of:", a: "Pars Planitis (Intermediate Uveitis)", options: ["Anterior Uveitis", "Pars Planitis", "Panuveitis", "Choroiditis"] },
        { q: "Candle Wax Drippings in retina are seen in:", a: "Sarcoidosis", options: ["Tuberculosis", "Sarcoidosis", "Syphilis", "Toxoplasmosis"] },
        { q: "Headlight in Fog appearance is seen in:", a: "Toxoplasmosis", options: ["Toxocariasis", "Toxoplasmosis", "CMV Retinitis", "Candidiasis"] },
        { q: "Pizza Pie / Ketchup and Cheese retinopathy is seen in:", a: "CMV Retinitis", options: ["HIV Retinopathy", "CMV Retinitis", "Herpes Zoster", "Rubella"] },
        { q: "Flower petal appearance on FFA (Cystoid Macular Edema) is seen in:", a: "Post-Cataract Surgery (Irvine Gass)", options: ["Diabetic Retinopathy", "Post-Cataract Surgery", "CRVO", "Uveitis"] },

        // Neuro-Ophthalmology & Tumors
        { q: "Bitemporal Hemianopia is caused by lesion at:", 
          a: "Optic Chiasma", 
          options: ["Optic Nerve", "Optic Chiasma", "Optic Tract", "Occipital Cortex"] 
        },
        { q: "Most common cause of chiasmal compression?", a: "Pituitary Adenoma", options: ["Craniopharyngioma", "Pituitary Adenoma", "Meningioma", "Aneurysm"] },
        { q: "Homonymous Hemianopia is caused by lesion at:", a: "Optic Tract or radiation", options: ["Optic Nerve", "Optic Chiasma", "Optic Tract", "Retina"] },
        { q: "Macular Sparing is a feature of lesion in:", a: "Occipital Cortex", options: ["Optic Tract", "Lateral Geniculate Body", "Occipital Cortex", "Temporal Lobe"] },
        { q: "Argyll Robertson Pupil is seen in:", a: "Neurosyphilis", options: ["Diabetes", "Neurosyphilis", "Multiple Sclerosis", "Adie's Tonic Pupil"] },
        { q: "Features of Argyll Robertson Pupil:", a: "Accommodates but does not react to light", options: ["Reacts to light but no accommodation", "Accommodates but does not react to light", "Dilated pupil", "Unilateral"] },
        { q: "Adie's Tonic Pupil is typically:", a: "Unilateral, dilated, poor reaction", options: ["Bilateral, constricted", "Unilateral, dilated, poor reaction", "Bilateral, dilated", "Unilateral, constricted"] },
        { q: "Marcus Gunn Pupil is seen in:", a: "Optic Nerve Disease", options: ["Retinal Disease", "Optic Nerve Disease", "Cataract", "Refractive Error"] },
        { q: "Most common intraocular tumor in adults?", a: "Metastasis", options: ["Melanoma", "Metastasis", "Retinoblastoma", "Hemangioma"] },
        { q: "Most common primary intraocular tumor in adults?", a: "Choroidal Melanoma", options: ["Choroidal Melanoma", "Retinoblastoma", "Osteoma", "Nevus"] },
        { q: "Tuberous Sclerosis is associated with:", a: "Astrocytic Retinal Hamartomas", options: ["Retinal Angioma", "Astrocytic Retinal Hamartomas", "Choroidal Hemangioma", "Melanoma"] },
        { q: "Von Hippel-Lindau disease is associated with:", a: "Retinal Angiomatosis", options: ["Retinal Angiomatosis", "Astrocytic Hamartoma", "Choroidal Melanoma", "Retinoblastoma"] },
        { q: "Sturge-Weber Syndrome is associated with:", a: "Choroidal Hemangioma & Glaucoma", options: ["Retinal Hemangioma", "Choroidal Hemangioma & Glaucoma", "Retinoblastoma", "Cataract"] }
    ]);
}
