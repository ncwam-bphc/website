import React from 'react';
import { Card, CardContent } from '~/components/ui/card';

interface Talk {
  title: string;
  speaker: string;
  institution: string;
}

interface TalkSectionProps {
  title: string;
  talks: Talk[];
}

interface TalksData {
  plenary: Talk[];
  welding: Talk[];
  additive: Talk[];
}

const TalksTable = () => {
  const talks: TalksData = {
    plenary: [
      {
        title: "Microstructures and Mechanical Properties of Additively Manufactured Metal Components",
        speaker: "Prof. G.D. Janaki Ram",
        institution: "IIT Hyderabad"
      }
    ],
    welding: [
      {
        title: "Applications of Artificial Intelligence/Deep learning Techniques in Welding",
        speaker: "Dr. M. Vasudevan",
        institution: "IGCAR Kalpakkam"
      },
      {
        title: "Friction Stir Welding of Similar and Dissimilar Plates and Weldment Properties with Process and Tool Parameters",
        speaker: "Prof. Satish Vasu Kailas",
        institution: "IISc Bangalore"
      },
      {
        title: "Comparative Study on Microstructures, Mechanical and Corrosion Properties of Fusion and Solid State Weldments of AA2219 Plates",
        speaker: "Prof. G. Madhusudhan Reddy",
        institution: "NIT Warangal"
      },
      {
        title: "Microstructures and Mechanical Properties of Resistance Spot Welded Ultra High Strength Steels",
        speaker: "Prof. Murugaiyan Amirthalingam",
        institution: "IIT Madras"
      },
      {
        title: "Influence of Ni- and Si-modified fillers on the microstructure and mechanical properties of Ti-15-3 GTA welds",
        speaker: "Prof. N. Kishore Babu",
        institution: "NIT Warangal"
      },
      {
        title: "In Situ Observations and Macro-micro Simulations of Laser-based Welding and Additive Manufacturing of Alloys",
        speaker: "Prof. Shyamprasad Karagadde",
        institution: "IIT Bombay"
      },
      {
        title: "Fusion Welding of Advanced High Strength Steels (AHSS) for Automotive Industry",
        speaker: "Prof. Mahesh Kumar Talari",
        institution: "NIT Warangal"
      },
      {
        title: "Welding and Joining in Space Sectors",
        speaker: "Dr. Agilan M",
        institution: "VSSC ISRO, Trivandrum"
      },
      {
        title: "Resistance welding of conventional and advanced high strength steels: challenges and recent developments",
        speaker: "Shri. Kaushal Kishore",
        institution: "R&D, Tata Steel Ltd., Jamshedpur"
      }
    ],
    additive: [
      {
        title: "Thermal Management Approaches for Distortion Control in AM",
        speaker: "Prof. Suryakumar",
        institution: "IIT Hyderabad"
      },
      {
        title: "Tailoring the Properties of Metal Additive Parts",
        speaker: "Prof. G.M. Karthik",
        institution: "IIT (BHU) Varanasi"
      },
      {
        title: "Slicing and Area Filling Strategies for Layered Manufacturing Technologies",
        speaker: "Prof. Rakesh Lingam",
        institution: "IIT Dharwad"
      },
      {
        title: "Metal Additive Technologies for Defence Applications: Challenges and Opportunities",
        speaker: "Dr. John Rozario Jegaraj",
        institution: "DRDL Hyderabad"
      },
      {
        title: "Laser powder bed fusion of immiscible alloys",
        speaker: "Prof. R. Lakshmi Narayan",
        institution: "IIT Delhi"
      },
      {
        title: "Modeling assisted workflows for single crystal processing of Ni based super alloys: Adaptations from Bridgman to Additive",
        speaker: "Prof. Abhik N. Choudhury",
        institution: "IISc Bangalore"
      },
      {
        title: "Laser surface processing and additive manufacturing of Steel",
        speaker: "Prof. Jyotsna Dutta Majumdar",
        institution: "IIT Kharagpur"
      },
      {
        title: "Lattice Structure based Light-weighing of Automotive and Space Structures Made by Additive Manufacturing",
        speaker: "Prof. Srinivasa Prakash Regalla",
        institution: "BITS Pilani Hyderabad"
      },
      {
        title: "Advancements in Welding and Additive Manufacturing: A Tech Talk on Innovation and Application",
        speaker: "Shri. Subrata Karmakar",
        institution: "ABB India, Bangalore"
      },
      {
        title: "Challenges in welding for mass production",
        speaker: "Shri. Nijagunayya Soppayya",
        institution: "Apollo Heat Exchangers, Tarapur"
      },
      {
        title: "Usage of Additive manufacturing in Locomotive industries",
        speaker: "Shri. Vishwanath KN",
        institution: "Wabtec Corporation, Bangalore"
      }
    ]
  };


  const TalkSection: React.FC<TalkSectionProps> = ({ title, talks }) => (
    <div className="mb-12">
      <div className="mb-6 text-center">
        <h4 className="customcol text-2xl font-bold md:text-4xl">{title}</h4>
      </div>
      <Card className="border-none bg-white/5 backdrop-blur-sm">
        <CardContent className="p-4 md:p-6">
          {/* Mobile View */}
          <div className="block md:hidden">
            {talks.map((talk, index) => (
              <div 
                key={index}
                className="mb-6 border-b border-white/10 pb-6 last:mb-0 last:border-b-0 last:pb-0"
              >
                <h5 className="mb-3 text-xl font-medium">{talk.title}</h5>
                <p className="mb-2 text-lg customcol">
                  <span className="font-medium">Speaker:</span> {talk.speaker}
                </p>
                <p className="text-lg customcol">
                  <span className="font-medium">Institution:</span> {talk.institution}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <colgroup>
                  <col className="w-[50%]" />
                  <col className="w-[25%]" />
                  <col className="w-[25%]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="whitespace-normal p-4 text-left text-xl font-semibold text-accent">Title</th>
                    <th className="whitespace-normal p-4 text-left text-xl font-semibold text-accent">Speaker</th>
                    <th className="whitespace-normal p-4 text-left text-xl font-semibold text-accent">Institution</th>
                  </tr>
                </thead>
                <tbody>
                  {talks.map((talk, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-white/10 transition-colors hover:bg-white/5"
                    >
                      <td className="whitespace-normal p-4 text-xl font-medium">{talk.title}</td>
                      <td className="whitespace-normal p-4 text-xl customcol">{talk.speaker}</td>
                      <td className="whitespace-normal p-4 text-xl customcol">{talk.institution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-accent md:text-4xl lg:text-5xl">
          INVITED TALKS
        </h2>
      </div>
      <TalkSection title="PLENARY TALK" talks={talks.plenary} />
      <TalkSection title="KEYNOTE TALKS: WELDING TECHNOLOGIES" talks={talks.welding} />
      <TalkSection title="KEYNOTE TALKS: ADDITIVE MANUFACTURING" talks={talks.additive} />
    </div>
  );
};

export default TalksTable;