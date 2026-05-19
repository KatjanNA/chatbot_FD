import { useState, useEffect } from "react";
import iconSvg from "../../imports/ICON01.svg";
import { ETFComparison } from "./ETFComparison";

interface StreamingResponseProps {
  onComplete?: () => void;
  onStart?: () => void;
}

const fullText = {
  intro:
    " Geld anzulegen ist wirklich keine leichte Entscheidung, oder? Um deine 3.000 € smart anzulegen, erkläre ich dir einfach und klar, wie ich es an deiner Stelle machen würde 😄",
  etfA: " ist deine Grundlage für echtes Wachstum! Mit einer starken Rendite von 5,2 % und den geringen Kosten bietet er dir die Chance, direkt am globalen Wachstum teilzuhaben. Aber durch das mittlere Risiko kann es Schwankungen geben.",
  etfB: " ermöglicht es dir in nachhaltige 🌱 europäische Unternehmen zu investieren, was dich kaum etwas kostet. Mit einer Rendite von 3,1 % und dem niedrigen Risiko ist er dein solider Anker für mehr Sicherheit.",
  recommendation:
    " Meine Empfehlung für dich wäre: Geh mit 70 % in ETF A und sichere die restlichen 30 % im ETF B ab. Das entspricht eine Investition von 2.100 € in ETF A und 900 € in ETF B. So kombinierst du Diversifikation und thematische Gewichtung sinnvoll 👍",
  conclusion:
    " Durch die 70/30-Teilung hast du einen ausgewogenen Ansatz aus Wachstum und Stabilität. Du nutzt die Renditechancen der globalen Märkte, hast aber gleichzeitig einen stabilisierenden Anteil durch ETF B. So ist dein Geld clever verteilt, das Risiko bleibt im Rahmen und du kannst dich entspannt zurücklehnen 😉",
  end: " Viel Erfolg dabei 💪",
  disclaimer:
    " Diese Nachricht ist KI-generiert und wurde auf Basis von statistischen Wahrscheinlichkeiten erzeugt, und kann daher Fehler enthalten. Sie dient ausschließlich zu Informationszwecken und ersetzt keine professionelle Beratung. Alle wichtigen Angaben sollten unabhängig überprüft werden, bevor auf deren Basis gehandelt wird.",
};

export function StreamingResponse({
  onComplete,
  onStart,
}: StreamingResponseProps) {
  const [showTable, setShowTable] = useState(false);
  const [displayedIntro, setDisplayedIntro] = useState("");
  const [displayedEtfA, setDisplayedEtfA] = useState("");
  const [displayedEtfB, setDisplayedEtfB] = useState("");
  const [showRecommendation, setShowRecommendation] =
    useState(false);
  const [displayedRecommendation, setDisplayedRecommendation] =
    useState("");
  const [displayedConclusion, setDisplayedConclusion] =
    useState("");
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [displayedDisclaimer, setDisplayedDisclaimer] = useState("");
  const [showEnd, setShowEnd] = useState(false);
  const [displayedEnd, setDisplayedEnd] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Call onStart immediately to hide thinking indicator
    if (onStart) {
      onStart();
    }

    // Step 1: Show table immediately
    setShowTable(true);

    // Step 2: Stream intro text
    const introWords = fullText.intro.split(" ");
    let introIndex = 0;

    const streamIntro = () => {
      if (introIndex < introWords.length - 1) {
        setDisplayedIntro(
          (prev) =>
            prev + (prev ? " " : "") + introWords[introIndex],
        );
        introIndex++;
        timeoutId = setTimeout(streamIntro, 50);
      } else {
        // Step 3: Stream ETF A text
        const etfAWords = fullText.etfA.split(" ");
        let etfAIndex = 0;

        const streamEtfA = () => {
          if (etfAIndex < etfAWords.length - 1) {
            setDisplayedEtfA(
              (prev) =>
                prev + (prev ? " " : "") + etfAWords[etfAIndex],
            );
            etfAIndex++;
            timeoutId = setTimeout(streamEtfA, 50);
          } else {
            // Step 4: Stream ETF B text
            const etfBWords = fullText.etfB.split(" ");
            let etfBIndex = 0;

            const streamEtfB = () => {
              if (etfBIndex < etfBWords.length - 1) {
                setDisplayedEtfB(
                  (prev) =>
                    prev +
                    (prev ? " " : "") +
                    etfBWords[etfBIndex],
                );
                etfBIndex++;
                timeoutId = setTimeout(streamEtfB, 50);
              } else {
                // Step 5: Show recommendation box
                setShowRecommendation(true);

                // Step 6: Stream recommendation text
                const recWords =
                  fullText.recommendation.split(" ");
                let recIndex = 0;

                const streamRec = () => {
                  if (recIndex < recWords.length - 1) {
                    setDisplayedRecommendation(
                      (prev) =>
                        prev +
                        (prev ? " " : "") +
                        recWords[recIndex],
                    );
                    recIndex++;
                    timeoutId = setTimeout(streamRec, 50);
                  } else {
                    // Step 7: Stream conclusion text
                    const conclusionWords =
                      fullText.conclusion.split(" ");
                    let conclusionIndex = 0;

                    const streamConclusion = () => {
                      if (
                        conclusionIndex <
                        conclusionWords.length - 1
                      ) {
                        setDisplayedConclusion(
                          (prev) =>
                            prev +
                            (prev ? " " : "") +
                            conclusionWords[conclusionIndex],
                        );
                        conclusionIndex++;
                        timeoutId = setTimeout(
                          streamConclusion,
                          50,
                        );
                      } else {
                        setShowEnd(true);
                        setDisplayedEnd("");
                        const endWords = fullText.end.split(" ");
                        let endIndex = 0;

                        const streamEnd = () => {
                          if (
                            endIndex <
                            endWords.length -1 
                          ) {
                            setDisplayedEnd((prev) =>
                              prev
                                ? prev + " " + endWords[endIndex]
                                : endWords[endIndex],
                            );
                            endIndex++;
                            timeoutId = setTimeout(
                              streamEnd,
                              50,
                            );
                          } else {
                            setShowDisclaimer(true);
                            setDisplayedDisclaimer("");
                            const disclaimerWords =
                              fullText.disclaimer.trim().split(" ");
                            let disclaimerIndex = -1;

                            const streamDisclaimer = () => {
                              if (
                                disclaimerIndex <
                                disclaimerWords.length -1 
                              ) {
                                setDisplayedDisclaimer((prev) =>
                                  prev
                                    ? prev + " " +
                                      disclaimerWords[disclaimerIndex]
                                    : disclaimerWords[disclaimerIndex],
                                );
                                disclaimerIndex++;
                                timeoutId = setTimeout(
                                  streamDisclaimer,
                                  50,
                                );
                              } else {
                                if (onComplete) {
                                  onComplete();
                                }
                              }
                            };

                            streamDisclaimer();
                          }
                        };

                        streamEnd();
                      }
                    };

                    streamConclusion();
                  }
                };

                streamRec();
              }
            };

            streamEtfB();
          }
        };

        streamEtfA();
      }
    };

    timeoutId = setTimeout(streamIntro, 300);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete, onStart]);

  return (
    <div className="space-y-3">
      {showTable && <ETFComparison />}

      <div className="text-base leading-relaxed">
        {displayedIntro && (
          <p className="mb-3">{displayedIntro}</p>
        )}

        {displayedEtfA && (
          <p className="mb-3">
            <strong>ETF A (Alpha Global)</strong>{" "}
            {displayedEtfA.replace("ETF A (Alpha Global) ", "")}
          </p>
        )}

        {displayedEtfB && (
          <p className="mb-3">
            <strong>ETF B (Beta Nachhaltig)</strong>{" "}
            {displayedEtfB.replace(
              "ETF B (Beta Nachhaltig) ",
              "",
            )}
          </p>
        )}

        {showRecommendation && (
          <div className="bg-violet-50 border-l-4 border-violet-500 p-3 rounded mt-3">
            <p className="font-semibold text-violet-900 mb-2">
              💡 Meine Empfehlung:
            </p>
            {displayedRecommendation && (
              <p className="text-violet-800">
                {(() => {
                  const parts =
                    displayedRecommendation.split("40%");
                  const beforeForty = parts[0] || "";
                  const afterForty = parts[1] || "";
                  const afterFortyParts =
                    afterForty.split("60%");
                  const betweenFortyAndSixty =
                    afterFortyParts[0] || "";
                  const afterSixty = afterFortyParts[1] || "";

                  return (
                    <>
                      {beforeForty}
                      {displayedRecommendation.includes(
                        "40%",
                      ) && <strong>40% in A</strong>}
                      {betweenFortyAndSixty}
                      {displayedRecommendation.includes(
                        "60%",
                      ) && <strong>60% in B</strong>}
                      {afterSixty}
                    </>
                  );
                })()}
              </p>
            )}
          </div>
        )}

        {displayedConclusion && (
          <p className="mb-6 mt-3">
            {displayedConclusion}
          </p>
        )}

        {showEnd && displayedEnd && (
          <p className="mb-3 mt-3">{displayedEnd}</p>
        )}

        {showDisclaimer && (
          <div className="bg-gray-100 shadow-sm border border-gray-200 py-3 px-2 rounded-lg p-0 text-sm text-gray-600 animate-fade-in">
            <div className="flex items-center">
              <img
                src={iconSvg}
                alt="AI"
                className="w-25 h-25 flex-shrink-0"
              />
              <p className="m-0">{displayedDisclaimer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}