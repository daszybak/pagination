import { Button, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";

import { useCreateAdMutation } from "../../../store/graphql/graphql-generated";

const CreateAd = () => {
  const [createAd, result] = useCreateAdMutation();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleFormOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createAd({ title, text });
      console.log("res", res);
      console.log("result", result);

      if (result.isSuccess) {
        setText("");
        setTitle("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginBottom: "4rem" }}>
      <Title>Create Ad</Title>
      <form onSubmit={handleFormOnSubmit}>
        <TextInput
          label="Ad title: "
          name="title"
          id="title"
          value={title}
          onChange={handleTitleOnChange}
        />
        <TextInput
          label="Ad text: "
          name="text"
          id="text"
          value={text}
          onChange={handleTextOnChange}
        />
        <Button type="submit">Create Ad</Button>
      </form>
    </div>
  );
};
export default CreateAd;
