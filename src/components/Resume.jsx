import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiPython,
} from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md'; // Import generic icon for MUI

const Resume = () => {
  return (
    <section className="text-white py-20">
      <div className="max-w-6xl mx-auto">
        {/* Tools of the Present Section */}
        <div>
          <h3 className="text-4xl font-semibold mb-6 text-center pb-4 text-white">
            Tools of the Present & Future
          </h3>

          {/* Front-End Technologies */}
          <div className="mb-10">
            <h4 className="text-sm font-normal mb-4 text-center text-gray-400">
              Front-End Technologies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center">
                <FaJsSquare className="text-yellow-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-blue-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">TypeScript</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-cyan-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">React</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-blue-400 text-6xl mb-4" />
                <p className="text-xl font-semibold">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-orange-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <FaBootstrap className="text-purple-600 text-6xl mb-4" />
                <p className="text-xl font-semibold">Bootstrap</p>
              </div>
              <div className="flex flex-col items-center">
                <MdOutlineDesignServices className="text-blue-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">MUI</p>
              </div>
            </div>
          </div>

          {/* Other Technologies */}
          <div>
            <h4 className="text-sm font-normal mb-4 text-center text-gray-400">
              Other Technologies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-green-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-gray-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">Express</p>
              </div>
              <div className="flex flex-col items-center">
                <SiGraphql className="text-pink-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">GraphQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql className="text-blue-500 text-6xl mb-4" />
                <p className="text-xl font-semibold">MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql className="text-blue-600 text-6xl mb-4" />
                <p className="text-xl font-semibold">PostgreSQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-green-400 text-6xl mb-4" />
                <p className="text-xl font-semibold">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPython className="text-blue-400 text-6xl mb-4" />
                <p className="text-xl font-semibold">Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;




