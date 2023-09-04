// @ts-nocheck
"use client";

import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import qs from "query-string";
import { Label } from "./label";

interface ApiBoxProps {
  title: string;
  url: string;
  description: string;
  variant: "public" | "admin";
  parameters: {
    name: string;
    type: string;
    default: number | string | undefined;
  }[];
}

const textMap: Record<ApiBoxProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiBoxProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

const ApiBox: React.FC<ApiBoxProps> = ({
  title,
  url,
  description,
  variant = "public",
  parameters,
}) => {
  let defaultValue = {};
  parameters.forEach((parameter) => {
    defaultValue[parameter.name] = parameter.default;
  });

  const [value, setValue] = useState(defaultValue);
  const [queryString, setQueryString] = useState("");

  useEffect(() => {
    const queryString = qs.stringify(value);
    setQueryString(queryString);
  }, [value]);

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success("API Route copied to the clipboard.");
  };

  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {url + "?" + queryString}
        </code>
        <Button variant="outline">
          <Copy className="h-4 w-4" size="icom" onClick={onCopy} />
        </Button>
      </AlertDescription>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent>
            <div
              className="my-1.5 text-primary"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Play with SearchParameters</AccordionTrigger>
          <AccordionContent>
            <div className="grid w-full items-center gap-1.5 my-3">
              {parameters.map((parameter) => (
                <div key={parameter.name} className="flex items-center">
                  <Label htmlFor={parameter.name} className="w-[20%]">
                    {parameter.name}:
                  </Label>
                  <Input
                    type={parameter.type}
                    id={parameter.name}
                    className="w-full"
                    min={0}
                    value={value[parameter.name]}
                    onChange={(e) => {
                      setValue((prev) => {
                        const dPrev = { ...prev };
                        dPrev[parameter.name] = e.target.value || undefined;
                        return dPrev;
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Alert>
  );
};

export default ApiBox;
