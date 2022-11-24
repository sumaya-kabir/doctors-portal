import React from 'react';
import fat from '../../../assets/skinimages/pexels-dmitriy-ganin-7772639.jpg';
import skin from '../../../assets/skinimages/pexels-gustavo-fring-3985298.jpg';
import lip from '../../../assets/skinimages/sam-moghadam-khamseh-l9VjM-Pp7-M-unsplash.jpg';
import ServiceCard from './ServiceCard';

const ServiceSec = () => {
    const services = [
        {
            id: 1,
            serviceName: "Fat Reduction",
            img: fat,
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, excepturi modi? Excepturi, aperiam. Nesciunt laudantium iure tempora aliquam deleniti. Consectetur quasi nihil alias dolores fuga necessitatibus deserunt totam vel, eveniet eos sequi distinctio recusandae, dolorem tempore. Architecto iure modi consequuntur laudantium laboriosam aliquid accusamus necessitatibus recusandae a enim nam voluptate aliquam error magnam asperiores illum dicta, similique voluptatem reiciendis quod quae reprehenderit tempore! Ea quas voluptatum rerum ratione iure dignissimos dolorem quae laudantium. Fugiat repellendus adipisci numquam quisquam, neque maiores, iusto modi voluptas corrupti laudantium, eveniet fugit autem. Officiis qui exercitationem, cupiditate voluptas quisquam rerum! Dolorem, expedita. Distinctio voluptatibus dolores laborum excepturi ab, impedit sapiente, amet voluptate quo repellat vel accusamus doloremque, delectus similique nihil accusantium. Optio placeat, officia amet libero quidem, at exercitationem quas, quam maxime repellat earum facere aut iure. A, qui voluptatum. Veniam, placeat sapiente maiores necessitatibus enim neque odio, repellendus modi reprehenderit nostrum voluptatum eius officiis?"
        },
        {
            id: 2,
            serviceName: "Skin Rejuvenation",
            img: skin,
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, excepturi modi? Excepturi, aperiam. Nesciunt laudantium iure tempora aliquam deleniti. Consectetur quasi nihil alias dolores fuga necessitatibus deserunt totam vel, eveniet eos sequi distinctio recusandae, dolorem tempore. Architecto iure modi consequuntur laudantium laboriosam aliquid accusamus necessitatibus recusandae a enim nam voluptate aliquam error magnam asperiores illum dicta, similique voluptatem reiciendis quod quae reprehenderit tempore! Ea quas voluptatum rerum ratione iure dignissimos dolorem quae laudantium. Fugiat repellendus adipisci numquam quisquam, neque maiores, iusto modi voluptas corrupti laudantium, eveniet fugit autem. Officiis qui exercitationem, cupiditate voluptas quisquam rerum! Dolorem, expedita. Distinctio voluptatibus dolores laborum excepturi ab, impedit sapiente, amet voluptate quo repellat vel accusamus doloremque, delectus similique nihil accusantium. Optio placeat, officia amet libero quidem, at exercitationem quas, quam maxime repellat earum facere aut iure. A, qui voluptatum. Veniam, placeat sapiente maiores necessitatibus enim neque odio, repellendus modi reprehenderit nostrum voluptatum eius officiis?"
        },
        
            {
                id: 3,
                serviceName: "Lip Enhancement",
                img: lip,
                descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, excepturi modi? Excepturi, aperiam. Nesciunt laudantium iure tempora aliquam deleniti. Consectetur quasi nihil alias dolores fuga necessitatibus deserunt totam vel, eveniet eos sequi distinctio recusandae, dolorem tempore. Architecto iure modi consequuntur laudantium laboriosam aliquid accusamus necessitatibus recusandae a enim nam voluptate aliquam error magnam asperiores illum dicta, similique voluptatem reiciendis quod quae reprehenderit tempore! Ea quas voluptatum rerum ratione iure dignissimos dolorem quae laudantium. Fugiat repellendus adipisci numquam quisquam, neque maiores, iusto modi voluptas corrupti laudantium, eveniet fugit autem. Officiis qui exercitationem, cupiditate voluptas quisquam rerum! Dolorem, expedita. Distinctio voluptatibus dolores laborum excepturi ab, impedit sapiente, amet voluptate quo repellat vel accusamus doloremque, delectus similique nihil accusantium. Optio placeat, officia amet libero quidem, at exercitationem quas, quam maxime repellat earum facere aut iure. A, qui voluptatum. Veniam, placeat sapiente maiores necessitatibus enim neque odio, repellendus modi reprehenderit nostrum voluptatum eius officiis?"
            }
        
    ]
    return (
        <div className='text-center my-12'>
            <h2 className='text-4xl font-semibold mb-6'>
                Our Surgical Services
            </h2>
            <p>
                On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment <br /> so blinded by desire that they cannot foresee the pain and trouble that are bound.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12 mt-12'>
                {
                    services.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceSec;