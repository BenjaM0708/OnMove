import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoLogoGoogle} from 'react-icons/io5'

export default function About() {

  return (
    <div className="min-h-screen bg-brand-light pt-24 px-6">
      <div className="max-w-4xl mx-auto py-16">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
          <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
            About
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="rounded-2xl overflow-hidden border border-brand-dark/10 shadow-sm h-80 bg-brand-navy/10 flex items-center justify-center">
            <img src='/about-personal-picture.jpg' alt="Benjamin's Personal photo" className="object-cover" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-brand-navy">
              {/* Tu nombre */}
            </h2>
            <p className="text-brand-dark/85 text-base leading-relaxed">
              My name is Benjamín Muñoz. I’m 23 years old, a Christian, and I’m currently training to become a web developer.
              OnMove was born when I identified a real problem and asked myself how I could help solve it through technology. I enjoy learning while building practical solutions, and software development has allowed me to combine creativity with problem-solving to create tools that add value to other people’s lives.
            </p>
            <p className="text-brand-dark/85 text-base leading-relaxed">
              Developing this app was a challenging and enriching experience. Every obstacle pushed me to learn new skills, improve my knowledge, and find ways to turn ideas into a functional solution using the resources available.
              Throughout this process, I was reminded of how God empowered people to design and build the work He had entrusted to them. In the same way, developing OnMove was an opportunity to rely on God, seeking His help, wisdom, and creativity at every stage of the project.
              My desire is to continue growing as a developer, keep learning, and create solutions that address real needs.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button className="mt-2 w-fit bg-brand-gold text-brand-light text-sm font-medium px-6 py-3 rounded-md hover:bg-brand-gold/80 transition-colors shadow-xl">
              <a href="https://github.com/BenjaM0708" target="_blank" className="flex items-center">
                GitHub
                <IoLogoGithub className="h-5 w-5 pl-1" />
              </a>
            </button>

            <button className="mt-2 w-fit bg-brand-gold text-brand-light text-sm font-medium px-6 py-3 rounded-md hover:bg-brand-gold/80 transition-colors shadow-xl">
              <a href="https://www.linkedin.com/in/benjamin-mu%C3%B1oz-116a06354/" target="_blank" className="flex items-center pl-1">
                Linkedin
                <IoLogoLinkedin className="h-5 w-5 pl-1" />
              </a>
            </button>

            <button className="mt-2 w-fit bg-brand-gold text-brand-light text-sm font-medium px-6 py-3 rounded-md hover:bg-brand-gold/80 transition-colors shadow-xl">
              <a href="https://wa.me/34614668536" target="_blank" className='flex items-center'>
                WhatApp
                <IoLogoWhatsapp className="h-5 w-5 pl-1" />
              </a>
            </button>

            <button className="mt-2 w-fit bg-brand-gold text-brand-light text-sm font-medium px-6 py-3 rounded-md hover:bg-brand-gold/80 transition-colors shadow-xl">
              <a href="https://mail.google.com/mail/?view=cm&to=benjamunozja@gmail.com&su=Consulta%20desde%20mi%20web&body=Hola,%20te%20escribo%20desde%20tu%20página%20para%20contactarte" target="_blank" className="flex items-center">
                Gmail
                <IoLogoGoogle className="h-5 w-5 pl-1" />
              </a>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}