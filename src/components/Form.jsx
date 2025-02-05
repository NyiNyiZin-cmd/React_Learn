import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [lang, setLang] = useState("");
  const [active, setActive] = useState(false);

  const languages = ["C", "C++", "Java", "Python", "PHP", "Javascript"];

  return (
    <div>
      <form>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description"></textarea>
        <select>
            {
                languages.map((lang, index) => (
                    <option key={index} value={lang}>
                        {lang}
                    </option>
                ))
            }
        </select>
        <button>Add Blogs</button>
      </form>
    </div>
  );
};

export default Form;
