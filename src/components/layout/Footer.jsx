import React from 'react'

const Footer = () => {
    return (
        <div className='w-full min-h-[388px] flex items-center bg-[#A45F00] text-white flex-col gap-[32px] pt-[72px] pb-[16px]'>
            <div className='w-full max-w-[1317px] mx-auto px-6'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                    {/* Branding and Mission */}
                    <div className='flex flex-col gap-[16px] w-[304px]'>
                        <div className='flex items-center gap-[12px]'>
                            <img src="/assets/images/logo.png" alt="Seekheed University" className='w-[76px] h-[70px]' />
                        </div>
                        <p className='text-[16px] text-[#fff]/90'>
                            Empowering futures through accessible,
                            innovative education and practical
                            entrepreneurship experience
                        </p>
                        <div className='flex gap-[10px]'>
                            <a href="#" className='w-[32px] h-[32px] bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'>
                                <img src="/assets/images/facebook.png" alt="Facebook" className='w-[28px] h-[28px]' />
                            </a>
                            <a href="#" className='w-[32px] h-[32px] bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'>
                                <img src="/assets/images/linkedin.png" alt="LinkedIn" className='w-[28px] h-[28px]' />
                            </a>
                            <a href="#" className='w-[32px] h-[32px] bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'>
                                <img src="/assets/images/instagram.png" alt="Instagram" className='w-[28px] h-[28px]' />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='flex flex-col gap-[24px] w-[135px]'>
                        <h3 className='text-[24px] font-[600]'>Quick Links</h3>
                        <ul className='flex flex-col gap-[16px]'>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>About Us</a></li>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Donate</a></li>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Store</a></li>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Progress</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className='flex flex-col gap-[24px] w-[135px]'>
                        <h3 className='text-[24px] font-[600]'>Resources</h3>
                        <ul className='flex flex-col gap-[16px]'>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Accessibility</a></li>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Board of Trustees</a></li>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Terms of Use</a></li>
                            <li><a href="#" className='text-[16px] text-[#fff]/90'>Privacy & Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className='flex flex-col gap-[24px] w-[242px]'>
                        <h3 className='text-[24px] font-[600]'>Contact</h3>
                        <ul className='flex flex-col gap-[16px]'>
                            <li className='text-[16px] text-white flex items-center flex gap-[10px]'>
                                <img src="/assets/images/phone.png" alt="Phone" className='w-4 h-4 flex-shrink-0' />
                                <span className='text-[16px] text-[#fff]/90'>+1 (555) 123-4567</span>
                            </li>
                            <li className='text-[16px] text-white flex items-center flex gap-[10px]'>
                                <img src="/assets/images/email.png" alt="Email" className='w-4 h-4 flex-shrink-0' />
                                <span className='text-[16px] text-[#fff]/90'>info@seekheedunivercity.edu</span>
                            </li>
                            <li className='text-[16px] flex items-start flex gap-[10px]'>
                                <img src="/assets/images/location.png" alt="Location" className='w-4 h-4 flex-shrink-0 mt-0.5' />
                                <span className='text-[16px] text-[#fff]/90'>123 Innovation Drive, Education City, EC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* Copyright */}
            <div className='border-t border-[#E5E7EC] pt-[32px] text-center w-full min-h-[62px]'>
                <p className='text-[16px] text-white'>
                    © 2025 Seekheed UniverCity. All rights reserved. |
                    <a href="#" className='hover:text-white mx-[4px]'>Privacy Policy</a> |
                    <a href="#" className='hover:text-white mx-[4px]'>Terms of Service</a>
                </p>
            </div>
        </div>
    )
}

export default Footer