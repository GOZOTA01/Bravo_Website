export type TreatmentAreaSlug =
  | "abdomen"
  | "arms"
  | "back"
  | "love-handles"
  | "thighs"
  | "inner-thighs"
  | "underarm"
  | "waistline";

export const treatmentAreasList: Array<{
  slug: TreatmentAreaSlug;
  name: string;
  blurb: string;
}> = [
  {
    slug: "abdomen",
    name: "Abdomen",
    blurb: "A common focus area for overall circumference and contour.",
  },
  { slug: "arms", name: "Arms", blurb: "Target stubborn upper-arm fullness." },
  { slug: "back", name: "Back", blurb: "Smooth and refine the back contour." },
  {
    slug: "love-handles",
    name: "Hips / Love Handles",
    blurb: "Support a more tapered waistline appearance.",
  },
  {
    slug: "thighs",
    name: "Thighs",
    blurb: "Contour the upper thighs with a structured plan.",
  },
  {
    slug: "inner-thighs",
    name: "Inner Thighs",
    blurb: "A precise area many patients want refined.",
  },
  {
    slug: "underarm",
    name: "Underarm",
    blurb: "A targeted zone that can be difficult to address.",
  },
  {
    slug: "waistline",
    name: "Waistline",
    blurb: "Enhance waist definition.",
  },
];

export type TreatmentAreaDetail = {
  title: string;
  headline: string;
  commonWhy: string;
  whatToExpect: string;
  idealCandidate: string;
  faqs: Array<{ q: string; a: string }>;
};

export const treatmentAreaDetails: Record<TreatmentAreaSlug, TreatmentAreaDetail> =
  {
    abdomen: {
      title: "Laser stomach / abdomen fat reduction",
      headline: "Laser abdomen fat reduction with Bravo Laser",
      commonWhy:
        "The abdomen is one of the most common places people hold stubborn fat, even with consistent diet and training.",
      whatToExpect:
        "Your provider will map the area, set a session cadence, and track progress over time. The protocol is designed to be comfortable and non-disruptive to daily life.",
      idealCandidate:
        "Patients seeking non-surgical contour change who want a structured plan and realistic, measurable expectations.",
      faqs: [
        {
          q: "Does it hurt?",
          a: "Many patients describe sessions as gentle and well-tolerated. Your provider will review what sensations to expect.",
        },
        {
          q: "How quickly will I see results?",
          a: "Results are typically gradual over a series. Your provider can outline a timeline based on your plan and goals.",
        },
      ],
    },
    arms: {
      title: "Laser arm fat reduction",
      headline: "Laser arm fat reduction with Bravo Laser",
      commonWhy:
        "Upper arms can be difficult to refine with exercise alone, especially when fullness is localized.",
      whatToExpect:
        "A provider-guided series targeting the upper arm zone, designed for comfort and consistency.",
      idealCandidate:
        "Patients who want a non-invasive option to support a more refined arm contour.",
      faqs: [
        {
          q: "Is there downtime?",
          a: "No. Patients typically return to normal activities immediately.",
        },
        {
          q: "How many sessions?",
          a: "Plans are personalized. Your provider will recommend a series based on goals and the area being treated.",
        },
      ],
    },
    back: {
      title: "Laser back fat reduction",
      headline: "Laser back fat reduction with Bravo Laser",
      commonWhy:
        "Back contour concerns can be influenced by genetics, distribution patterns, and lifestyle.",
      whatToExpect:
        "External treatment sessions guided by a provider who tracks circumference and visible changes over time.",
      idealCandidate:
        "Patients who want a gradual, non-surgical approach to back contour refinement.",
      faqs: [
        {
          q: "Can this treat multiple zones?",
          a: "Many plans include more than one area. Your provider will prioritize based on goals and protocol.",
        },
        {
          q: "Is it a weight loss treatment?",
          a: "Bravo Laser is positioned for contour and circumference change. Your provider will set expectations for your body and plan.",
        },
      ],
    },
    "love-handles": {
      title: "Laser love handle reduction",
      headline: "Laser hips / love handle fat reduction with Bravo Laser",
      commonWhy:
        "Hips and love handles are common stubborn zones, even in otherwise active patients.",
      whatToExpect:
        "A structured series with tracking and lifestyle reinforcement where appropriate.",
      idealCandidate:
        "Patients seeking non-invasive waistline refinement and improved silhouette.",
      faqs: [
        {
          q: "Will I be sore afterward?",
          a: "Most patients report minimal disruption. Your provider will review post-care guidance.",
        },
        {
          q: "Do I need to change my diet?",
          a: "Your provider may recommend supportive habits, but the plan is personalized and realistic.",
        },
      ],
    },
    thighs: {
      title: "Laser thigh fat reduction",
      headline: "Laser thigh fat reduction with Bravo Laser",
      commonWhy:
        "Thigh contour is a frequent goal, especially when fat distribution is localized.",
      whatToExpect:
        "Provider-guided sessions designed for consistency and measurable progress.",
      idealCandidate:
        "Patients who want a comfortable, non-surgical approach to thigh contour refinement.",
      faqs: [
        {
          q: "Can inner thighs be treated too?",
          a: "Yes. Ask your provider about a plan that includes inner thigh targeting when appropriate.",
        },
        {
          q: "How long is a session?",
          a: "Session length varies by areas and protocol. Your provider will give a time estimate.",
        },
      ],
    },
    "inner-thighs": {
      title: "Laser inner thigh fat reduction",
      headline: "Laser inner thigh fat reduction with Bravo Laser",
      commonWhy:
        "Inner thighs are a precise area where subtle changes can make a big difference in comfort and confidence.",
      whatToExpect:
        "A targeted series that is provider-guided, comfortable, and tracked over time.",
      idealCandidate:
        "Patients seeking a non-invasive option for a hard-to-treat zone.",
      faqs: [
        {
          q: "When should I book a consult?",
          a: "If you’re considering treatment, a consult is the fastest way to confirm fit and set expectations.",
        },
        {
          q: "Is it safe for everyone?",
          a: "Eligibility is individual. Your provider will review medical history and goals before proceeding.",
        },
      ],
    },
    underarm: {
      title: "Laser underarm fat reduction",
      headline: "Laser underarm fat reduction with Bravo Laser",
      commonWhy:
        "Underarm fullness is a common concern and can be difficult to address with exercise alone.",
      whatToExpect:
        "A provider-guided protocol designed to fit into your week with no downtime.",
      idealCandidate:
        "Patients wanting a conservative, non-surgical approach to underarm contour.",
      faqs: [
        {
          q: "Will I need multiple sessions?",
          a: "Most patients follow a series-based plan. Your provider will personalize the cadence.",
        },
        {
          q: "Can I treat other areas too?",
          a: "Many patients combine areas. Ask your provider about prioritizing zones based on goals.",
        },
      ],
    },
    waistline: {
      title: "Laser waistline fat reduction",
      headline: "Laser waistline fat reduction with Bravo Laser",
      commonWhy:
        "Waistline definition is often impacted by stubborn fat distribution patterns.",
      whatToExpect:
        "A structured treatment plan with tracking and clear checkpoints over time.",
      idealCandidate:
        "Patients who want measurable, non-invasive contour change without downtime.",
      faqs: [
        {
          q: "How do providers track progress?",
          a: "Many track circumference, photos, and fit changes across a series of sessions.",
        },
        {
          q: "What should I do after sessions?",
          a: "Follow your provider’s plan. They may recommend simple supportive habits for best results.",
        },
      ],
    },
  };
