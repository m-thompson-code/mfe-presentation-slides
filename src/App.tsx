import { FC, ReactNode, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { autoPlacement, safePolygon, useFloating, useHover, useInteractions } from "@floating-ui/react";

import "./App.scss";
import { Slide, slides } from "./slides";

const Bar: FC<{ slide: Slide; children: ReactNode; addSlide: (slide: Slide) => void }> = ({ slide, children, addSlide }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        middleware: [autoPlacement()],
        open: isOpen,
        onOpenChange: setIsOpen,
        strategy: "fixed",
    });

    const hover = useHover(context, {
        handleClose: safePolygon(),
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <>
            <div
                className="bar-container"
                ref={refs.setReference}
                {...getReferenceProps()}
                onClick={() => {
                    addSlide(slide);
                }}
            >
                <div className={`bar bar-${slide.confidence}`}>
                    <div className="bar-fill" style={{ background: slide.presenter === "mark" ? "teal" : "orange" }}>
                        {children}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="preview" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    {slide.page}
                    <iframe
                        src={`https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/${slide.page}`}
                        title={slide.page}
                    />
                </div>
            )}
        </>
    );
};

const Graph: FC<{ addSlide: (slide: Slide) => void }> = ({ addSlide }) => {
    const series = [...new Set(slides.map(({ page }) => page.slice(0, 2)))].map((section) => ({
        section,
        slides: slides.filter(({ page }) => page.startsWith(section)),
    }));

    return (
        <div className="graph-container">
            <div className="y-axis">
                <div className="axis">5</div>
                <div className="axis">4</div>
                <div className="axis">3</div>
                <div className="axis">2</div>
                <div className="axis">1</div>
            </div>
            <div className="bar-graph-container">
                <div className="bar-graph">
                    <div className="overlay">
                        <div className="axis"></div>
                        <div className="axis"></div>
                        <div className="axis"></div>
                        <div className="axis"></div>
                        <div className="axis"></div>
                    </div>

                    {series.map(({ section, slides }) => (
                        <div className="section" key={section}>
                            <div className="bars">
                                {slides.map((slide, i) => (
                                    <Bar addSlide={addSlide} slide={slide} key={slide.page}>
                                        {i + 1}
                                    </Bar>
                                ))}
                                <div className="divider"></div>
                            </div>

                            <div className="title">{section}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
);

const Logs: FC<{ slides: Slide[]; removeSlide: (slide: Slide) => void }> = ({ slides, removeSlide }) => {
    return <>
        {slides.map(slide => <div key={slide.page} className="log">
            <p>{slide.page} <a onClick={() => removeSlide(slide)}>(close)</a></p>
            <p>Presenter: {slide.presenter.toUpperCase()}</p>
            <p><a href={`https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/${slide.page}`} target="_blank">{`https://davidnic11.github.io/workshop-enterprise-grade-micro-frontends/${slide.page}`}</a></p>
            {slide.notes && <p>{slide.notes}</p>}
        </div>)}
    </>
};

const App: FC = () => {
    const [slides, setSlides] = useState<Slide[]>([]);

    const addSlide = (slide: Slide) => {
        setSlides((prev) => {
            if (prev.some((slide) => slide.page === slide.page)) {
                return prev;
            }

            return [slide, ...prev];
        });
    };

    const removeSlide = (slide: Slide) => {
        setSlides((prev) => {
            return prev.filter((prev) => prev.page === slide.page);
        });
    };

    return (
        <ThemeWrapper>
            <Graph addSlide={addSlide} />
            <Logs slides={slides} removeSlide={removeSlide} />
        </ThemeWrapper>
    );
};

export default App;
