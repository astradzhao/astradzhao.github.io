# Daniel Zhao

[danielzhao02@gmail.com](mailto:danielzhao02@gmail.com) | [astradzhao.github.io](https://astradzhao.github.io/) | [linkedin.com/in/danzhao02](https://www.linkedin.com/in/danzhao02/)

## Education

### University of California, San Diego | San Diego, CA | Sep 2024 – Dec 2025

*M.S. in Computer Science – Machine Learning Focus* | GPA: 3.90

- *Relevant Coursework:* Deep Learning, Machine Learning, NLP, ML Systems, Artificial Intelligence, Recommender Systems, Computer Architecture

### University of California, Berkeley | Berkeley, CA | Aug 2020 – May 2024

*B.A. in Computer Science & B.A. in Applied Math* | GPA: 3.90

## Skills

Machine Learning, Agentic Systems, System Design, LLM Evals, Knowledge Graphs, RAG, Python, PyTorch, TypeScript, Neo4j, AWS, Azure, Docker, Kubernetes, Git, SQL, GraphQL, Go, React, TensorFlow, C/C++, Java, Ruby, Unix, Scala

## Professional Experience

### Founding Member of Technical Staff | Axilon | Dec 2025 – Present

- Built deterministic and multi-agent ingestion pipelines for proprietary industrial control systems (Ignition, Rockwell, Mitsubishi), CAD, and scanned factory documents, unifying operational data in a Neo4j knowledge graph
- Led technical deployment strategy for **3+ large manufacturing enterprises**, owning AWS and Azure infrastructure through Terraform, with forward-deployed work and training sessions for maintenance and line leaders on the factory floor
- Designed and shipped agentic harnesses for ingestion, plant query, and root cause analysis, enabling **scalable, VM-isolated, multi-tenant** agent execution over the ontology in TS & Golang; harnesses combined multi-agent frameworks with specialized tools, human-in-the-loop approval, orchestrators, reviewer agents, and deterministic validation
- Created **LLM-as-a-judge & deterministic evals alongside FactorySim**, a synthetic factory with causal ground truth, to benchmark agent root-cause accuracy across various SOTA foundation models
- Saved **over 70% of LLM costs** by adding auto-compaction & token caching, parallelizing tool calls, and introducing dynamic model routing
- Architected Git-style version control for the graph: branching on Neo4j multi-database, commit history, 3-way merges with field-level and agent-assisted conflict resolution, and revert/restore
- Built the real-time plant data layer (OPC UA/Ignition tag acquisition, TimescaleDB historian, trigger evaluation), handling 100,000s of real-time tags as fundamental context for agents

### Applied ML Engineer (Contract) | Outerproduct | Feb 2026 – Apr 2026

- Performed **distributed training and steering of LLMs from 8B to 119B parameters** (Llama 3.1/3.3, Mistral Small 3.1/4) with recursive feature machines, learning per-layer concept directions and steering coefficients toward a target persona
- Added Mistral Small 4 support via a custom FP8-to-BF16 dequantization loader and a streaming filter for reasoning traces; stabilized multi-GPU RFM training with device-placement fixes and a kernel bandwidth/regularization search
- Generated a **500+ example synthetic training dataset** using Claude Sonnet 4.5 and a GPT-5-mini simulated user after finding ~67% of prior responses reused the same openers, and built **multi-turn steered-conversation evals**
- Served steered persona variants on RunPod (4x A100) and Modal sandboxes with Vercel frontends, shipping a Dockerized CUDA environment

### Machine Learning Engineer Intern | Qualcomm | Jun 2025 – Sep 2025

- Architected a multimodal RAG system through LangChain, utilizing **ONNX-based CLIP embeddings, a FAISS vector store, and Qwen2.5-VL**
- Deployed the system on a Qualcomm-native CPU machine, benchmarking against a CUDA host on recent visual QA datasets (Haystacks, ViDoRe, MRAG-Bench) using a self-built LLM-as-a-judge framework with a smaller judge model
- Cross-compiled Llama.cpp for Qualcomm Adreno GPUs and **quantized a 7B Qwen2.5-VL-Instruct model to Q4_0**, achieving **10x speedup** over baseline CPU implementation
- Profiled and **optimized CLIP projection encoding in C++**, achieving **5x speedup** over the naive method through bottleneck analysis and matrix-multiplication tiling

### Teaching Assistant | UC San Diego | Dec 2024 – Dec 2025

- **CSE 234: ML Systems** (Winter 2025) under **Prof. Hao Zhang**: Co-built 3 brand-new programming assignments with the TA team for the course's first offering: matmul optimization (algorithmic, tiling, kernel-level, and allreduce/parallel variants), a TensorFlow-style autodiff framework built from scratch in Python, and speculative decoding; led final-exam proctoring and maintained the Ruby course website
- **CSE 253: ML for Music** (Spring 2025) & **CSE 258: Recommender Systems** (Fall 2025) under **Prof. Julian McAuley**: Held discussion sections, and co-designed and revised CSE 253 assignments on audio representations, including mel-spectrogram analysis
- Hosted 100+ office hours across all three courses

### Research Intern | MUSAIC, Hao AI Lab @ UCSD | Apr 2024 – Dec 2025

- Led research on interpretable, controllable music generation with recursive feature machines and sparse autoencoders, resulting in a **first-author ICLR 2026 paper**
- Co-led SAE-guided chain-of-thought reasoning research and contributed to **VideoScience-Bench (ECCV 2026) and QLoRA support for CLLMs (ICML 2024)** in the Hao AI Lab

### Machine Learning Engineer Intern | Accretional | Jun 2024 – Sep 2024

- Designed and implemented a RAG vector embedding model to ground the LLM with respect to API and cloud infrastructure. Fully constructed VSCode application in Svelte and TypeScript to help users easily implement and deploy APIs in less than 5 seconds

### Software Engineer Intern | Hinge Health | May 2023 – Aug 2023

- Replaced a tedious manual data-reset workflow with an automated flow built directly into the app, saving other engineers 100s of hours
- Designed and built 5+ endpoints and event consumers in TypeScript and Ruby on Rails across 8 Dockerized repos, wiring services together with RabbitMQ event emitting, restructuring and extending GraphQL queries, and deploying to Kubernetes
- Delivered 10+ React UI/UX features and bug fixes end to end, scoping solutions with PMs and presenting them in weekly engineering demos, while running 5+ daily standups and sprint planning sessions in Jira (story points, bug intake)

### Full Stack Intern | Cisco Meraki | May 2022 – Aug 2022

- Led a full-stack project to build uplink ping-stat graphs that let 500,000 customers visualize wireless network trends over time, spanning a Scala grabber that collected ping stats from 4M+ wireless internet nodes, Ruby on Rails endpoints over backend data collectors and procedures, and the frontend graphs
- Ran experiments with global PostgreSQL and LittleTable queries across shards to analyze rapidly growing tables and mitigate their size
- Revamped 5+ landing-page features in JavaScript & React, turning UI/UX improvement tickets from Jira into shipped interfaces

## Research & Publications

### [Steering Autoregressive Music Generation with Recursive Feature Machines](https://arxiv.org/abs/2510.19127)

*ICLR 2026, first author* | [arXiv:2510.19127](https://arxiv.org/abs/2510.19127)

**Daniel Zhao**, Daniel Beaglehole, Taylor Berg-Kirkpatrick, Julian McAuley, Zachary Novack

- Introduced MusicRFM, the **first framework to adapt recursive feature machines (RFMs) to text-to-music generation**, enabling fine-grained, interpretable control over a frozen MusicGen-Large model with no fine-tuning or per-step optimization
- Trained lightweight, layer-wise RFM probes (kernel ridge regression with Average Gradient Outer Product feature learning) on the SynTheory dataset to extract concept directions for notes, intervals, chord qualities, scale modes, and tempo
- Injected concept directions into the model's residual stream via forward hooks at inference time, with top-*K* and exponential layer weighting across 48 decoder blocks, time-varying steering schedules, and multi-direction steering
- Raised target-note generation accuracy from 0.23 to 0.82 while keeping CLAP text-prompt adherence within about 0.02 of the unsteered baseline; open-sourced the code ([astradzhao/music-rfm](https://github.com/astradzhao/music-rfm), 40+ GitHub stars)

### [Benchmarking Scientific Understanding and Reasoning for Video Generation using VideoScience-Bench](https://arxiv.org/abs/2512.02942)

*ECCV 2026* | [arXiv:2512.02942](https://arxiv.org/abs/2512.02942)

Lanxiang Hu, Abhilash Shankarampeta, Yixin Huang, Zilin Dai, Haoyang Yu, Yujie Zhao, Haoqiang Kang, **Daniel Zhao**, Tajana Rosing, Hao Zhang

- Contributed to VideoScience-Bench, the **first benchmark to evaluate video models as zero-shot scientific reasoners**, with 200 curated prompts spanning 14 topics and 103 undergraduate physics and chemistry concepts
- Evaluated seven state-of-the-art video models (including Sora-2 and Veo-3) in text-to-video and image-to-video settings on immutability, correct dynamism, spatio-temporal continuity, and phenomenon congruency
- Developed VideoScience-Judge, a checklist-based VLM-as-a-judge with key-frame selection and computer-vision cues, whose scores correlated strongly with expert human annotations

### [Towards Interpretable and Inference-Optimal CoT Reasoning with Sparse Autoencoder-Guided Generation](https://arxiv.org/abs/2510.01528)

*Preprint, 2025* | [arXiv:2510.01528](https://arxiv.org/abs/2510.01528)

**Daniel Zhao**\*, Abhilash Shankarampeta\*, Lanxiang Hu\*, Tajana Rosing, Hao Zhang (\*equal contribution)

- Proposed an unsupervised method that trains a sparse autoencoder (SAE) on LLM token representations and applies *k*-means clustering to build a cluster-transition graph from correct mathematical reasoning traces
- Defined an edge-weight reward that scores adherence to established reasoning trajectories **(exploitation)**, paired with cluster-diversity metrics that measure **exploration**
- Showed on MiniCPM models that balancing exploitation and exploration is key to reasoning accuracy, and that the reward transfers to GSM8K and HumanEval while sharply separating non-reasoning text, positioning the SAE as a scalable reward model for guiding CoT generation

### [CLLMs: Consistency Large Language Models](https://arxiv.org/abs/2403.00835)

*ICML 2024, open-source contributor* | [arXiv:2403.00835](https://arxiv.org/abs/2403.00835)

Siqi Kou, Lanxiang Hu, Zhezhi He, Zhijie Deng, Hao Zhang

- Added **QLoRA support** to the official CLLM implementation ([hao-ai-lab/Consistency_LLM](https://github.com/hao-ai-lab/Consistency_LLM), 400+ GitHub stars), [merged upstream](https://github.com/hao-ai-lab/Consistency_LLM/pull/12) as an opt-in PEFT LoRA path (rank 32) with k-bit training preparation, wired through the multi-GPU FSDP training scripts
- Enabled consistency fine-tuning on Jacobi trajectories with over 3x lower memory usage, for a parallel-decoding method that sped up LLM generation 2.4–3.4x without loss in quality