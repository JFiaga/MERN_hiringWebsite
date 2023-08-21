import React from 'react'
import { FiAnchor } from 'react-icons/fi'

type Props = {}

const ProfileHardSkills = (props: Props) => {
  return (
    <div className="flex justify-between  items-center flex-col md:flex-row">
    <div>
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>{" "}
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>{" "}
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>{" "}
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>
    </div>
    <div>
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>{" "}
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>{" "}
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>{" "}
      <div>
        <FiAnchor className="text-primary" />
        <span>Laravel</span>
      </div>
    </div>
  </div>
  )
}

export default ProfileHardSkills